import { resolve } from 'node:path'
import { defineConfig } from 'tsdown'

export default defineConfig({
    clean: true,
    dts: {
        sourcemap: true,
    },
    entry: ['./src/index.ts','./src/cli/index.ts'],
    outDir: 'dist',
    alias: {
        '@': resolve(__dirname, './src')
    }
})
