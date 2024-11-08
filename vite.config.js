import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    plugins: [svelte()],
    server: {
        port: 3003,
        open: true, // Открывает браузер автоматически при запуске сервера
    },
    build: {
        outDir: 'dist', // Папка для сборки проекта
    },
});
