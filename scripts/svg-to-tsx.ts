// check-spell:ignore svgr
import { exists, mkdir, readdir } from 'node:fs/promises';
import { basename, extname, join } from 'node:path';
import { transform } from '@svgr/core';
import Bun from 'bun';
import { optimize } from 'svgo';

async function convertSvgToComponent(assetsDir: string, shapesDir: string) {
  // Check if directory exists
  if (!(await exists(shapesDir))) {
    await mkdir(shapesDir, { recursive: true });
  }

  // Read files from assets directory
  const files = await readdir(assetsDir, { recursive: false });
  for (const file of files) {
    if (extname(file) === '.svg') {
      console.log(` ~ '${file}' svg found.`);

      const svgContent = await Bun.file(join(assetsDir, file)).text();
      const fileName = basename(file, extname(file)); // Use basename directly
      const componentName = `Shape${fileName.split('-')?.[1]}`; // Adjust naming logic
      const destinationPath = join(shapesDir, `${fileName}.tsx`);

      // Remove gradients using a more specific pattern
      const gradientLessSvg = svgContent.replace(
        /<linearGradient[^>]*>(?:(?!<\/linearGradient>).)*?<\/linearGradient>/g,
        ''
      );

      // Update fills with gradients
      const updatedSvg = gradientLessSvg.replace(/fill="url\(#([^"]+)\)"/g, 'fill="currentColor"');

      const optimizedSvg = optimize(updatedSvg, {
        plugins: [
          { name: 'preset-default', params: { overrides: { removeViewBox: false } } },
          'removeXMLNS',
        ],
      });

      const tsxCode = await transform(
        optimizedSvg.data,
        {
          ref: true,
          memo: true,
          svgo: false,
          icon: false,
          native: true,
          typescript: true,
          exportType: 'default',
          jsxRuntimeImport: {
            source: 'react',
            defaultSpecifier: 'React',
          },
          plugins: ['@svgr/plugin-jsx'],
        },
        {
          componentName,
          filePath: destinationPath,
          caller: { name: componentName },
        }
      );

      const updatedTsxCode = tsxCode
        .replace('Ref<SVGSVGElement>', 'Ref<Svg>')
        .replace('Ref,', 'type Ref,')
        .replace(' fill="#fff"', '');

      await Bun.write(destinationPath, updatedTsxCode, { createPath: false });
      console.log(` ~ '${file}' to '${destinationPath}' converted.`);
    }
  }
}

try {
  const assetsDir = join(__dirname, '../', 'assets');
  const shapesDir = join(__dirname, '../', 'packages', 'native', 'src', 'shapes-experiment');
  await convertSvgToComponent(assetsDir, shapesDir);
} catch (error) {
  console.error(' ~ error:', error);
}
