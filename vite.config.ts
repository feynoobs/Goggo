import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    server: {
        host: true,
        hmr: {
            host: 'localhost'
        },
        watch: {
            usePolling: true,
        }
    },
    plugins: [
        vue(),
        laravel({
            input: ['resources/scss/app.scss', 'resources/ts/app.ts'],
            refresh: true,
        }),
    ],
});
