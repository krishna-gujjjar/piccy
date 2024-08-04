// check-spell:ignore treeshake

import { defineConfig } from 'tsup';
import type { Options } from 'tsup';

export default defineConfig((options: Options) => ({
  entry: {
    index: 'src/index.tsx',
  },
  splitting: true,
  // minify:true,
  clean: true,
  treeshake: true,
  format: ['cjs', 'esm'],
  external: ['react', 'react-native', 'react-native-svg'],
  dts: true,
  ...options,
}));
