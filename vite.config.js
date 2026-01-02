import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    // Add Vite config options here if needed
    plugins: [
        tailwindcss()
    ]
});