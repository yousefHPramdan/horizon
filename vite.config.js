import { defineConfig } from 'vite'
import shopify from 'vite-plugin-shopify'

export default defineConfig({
    plugins: [
        shopify({
            themeRoot: './',
            sourceCodeDir: 'frontend',
            entrypointsDir: 'frontend/entrypoints'
        })
    ],
    build: {
        emptyOutDir: false,
        outDir: 'assets',
        rollupOptions: {
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].[hash].js',
                assetFileNames: '[name].[ext]'
            }
        }
    }
})
