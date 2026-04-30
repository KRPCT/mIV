import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';

function jsAsJsx() {
  return {
    name: 'js-as-jsx',
    async transform(code, id) {
      if (!id.match(/src\/.*\.js$/)) {
        return null;
      }

      return transformWithEsbuild(code, id, {
        loader: 'jsx',
        jsx: 'automatic',
      });
    },
  };
}

export default defineConfig({
  base: '/m4/',
  plugins: [jsAsJsx(), react()],
  build: {
    outDir: 'build',
  },
});
