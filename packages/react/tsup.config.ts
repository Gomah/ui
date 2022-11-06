import { defineConfig } from 'tsup';
import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';

export default defineConfig({
  entry: ['./index.tsx'],
  outDir: 'dist',
  splitting: true,
  bundle: true,
  minify: false,
  dts: true,
  esbuildPlugins: [vanillaExtractPlugin()],
  format: ['esm', 'cjs'],
  external: ['react', 'react-dom', '@vanilla-extract/recipes'],
  treeshake: true,
  clean: true,
});
