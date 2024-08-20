import { readdir } from 'node:fs/promises';
import { basename, extname, join } from 'node:path';
import { transform } from '@svgr/core';
import { optimize } from 'svgo';

export async function readSvgFiles(assetsDir: string) {
  const files = await readdir(assetsDir, { recursive: false });
  return files.filter((file) => extname(file));
}

async function getSvgContent(filePath: string) {
  return await Bun.file(filePath).text();
}

function getComponentName(fileName: string) {
  return `Shape${fileName.split('-')?.[1]}`;
}

export function getAssetsPath(path: string) {
  return join(path, '../', 'assets');
}

function getDestinationPath(shapesDir: string, fileName: string) {
  return join(shapesDir, `${fileName}.tsx`);
}

function removeGradients(svgContent: string) {
  return svgContent.replace(
    /<linearGradient [^>]*>(?: (?!<\/linearGradient>). )*?<\/linearGradient>/g,
    ''
  );
}

function updateSvgFills(svgContent: string) {
  return svgContent.replace(/fill="url\(#([^"]+)\)"/g, 'fill="currentColor"');
}

async function getTSXCode(
  svg: string,
  componentName: string,
  destinationPath: string,
  isNative = false
) {
  const optimizedSvg = optimize(svg, {
    plugins: [
      { name: 'preset-default', params: { overrides: { removeViewBox: false } } },
      'removeXMLNS',
      'convertStyleToAttrs',
    ],
  });

  const tsxCode = await transform(
    optimizedSvg.data,
    {
      ref: true,
      memo: true,
      svgo: false,
      icon: false,
      native: isNative,
      typescript: true,
      exportType: 'default',
      jsxRuntime: 'automatic',
      plugins: ['@svgr/plugin-jsx'],
      template: (variables, { tpl }) => tpl`
        ${variables.imports};
        ${variables.interfaces};
        const ${variables.componentName} = (${variables.props}):JSX.Element => (${variables.jsx});
        ${variables.exports};
      `,
    },
    {
      componentName,
      filePath: destinationPath,
      caller: { name: componentName },
    }
  );

  return removeRefs(tsxCode, isNative);
}

function removeRefs(svgContent: string, isNative = false) {
  let modifiedSvgContent = svgContent;

  if (isNative) {
    modifiedSvgContent = modifiedSvgContent.replace('Ref<SVGSVGElement>', 'Ref<Svg>');
  }

  return modifiedSvgContent.replace('Ref,', 'type Ref,').replace(' fill="#fff"', '');
}

export async function generateTSXCode(file: string, currentPath: string, isNative = false) {
  const assetsDir = getAssetsPath(currentPath);
  const shapesDir = join(
    currentPath,
    '../',
    'packages',
    isNative ? 'native' : 'web',
    'src',
    'shapes'
  );

  console.log(`~ '${file}' svg found.`);
  const svgContent = await getSvgContent(join(assetsDir, file));
  const fileName = basename(file, extname(file));
  const componentName = getComponentName(fileName);
  const destinationPath = getDestinationPath(shapesDir, fileName);

  const gradientLessSvg = removeGradients(svgContent);
  const updatedSvg = updateSvgFills(gradientLessSvg);

  const tsxCode = await getTSXCode(updatedSvg, componentName, destinationPath, isNative);

  await Bun.write(destinationPath, tsxCode, { createPath: false });
  console.log(`~ '${file}' to '${destinationPath}' converted.`);
}
