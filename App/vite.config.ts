import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, './src/components'),
            '@data': path.resolve(__dirname, './src/data'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@hooks': path.resolve(__dirname, './src/hooks')
        }
    },
    plugins: [react()],
    server: {
        watch: {
            usePolling: true
        },
        proxy: {
            '/api': {
                target: 'https://api.coingecko.com/api/v3',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, '')
            }
        }
    }
});
