// check-spell:ignore treeshake

import { defineConfig } from 'tsup';
import type { Options } from 'tsup';

export default defineConfig((options: Options) => ({
  entry: {
    index: 'src/index.tsx',
  },
  dts: true,
  clean: true,
  splitting: true,
  treeshake: true,
  minify: !options.watch,
  format: ['cjs', 'esm'],
  external: ['react', 'react-native', 'react-native-svg'],
  ...options,
}));
