import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: true,
  dts: true,
  format: ['cjs', 'esm'],
  treeshake: true,
  sourcemap: false,
  clean: true,
});
