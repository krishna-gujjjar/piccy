import { generateTSXCode, getAssetsPath, readSvgFiles } from './utils';

async function convertSvgToComponent(currentPath: string) {
  const files = await readSvgFiles(getAssetsPath(currentPath));
  for (const file of files) {
    await generateTSXCode(file, currentPath, true);
  }
}

await convertSvgToComponent(__dirname);
