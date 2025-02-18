import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from 'vite-plugin-singlefile'
import path from 'path'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue(), viteSingleFile()],
  root: resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Set '@' to point to 'src' folder
    },
  },
  build: {
    outDir: resolve(__dirname, 'dist'),
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    brotliSize: false,
    rollupOptions: {
      input: resolve(__dirname, 'src/index.html'),
      output: {
        inlineDynamicImports: true
      }
    }
  }
})