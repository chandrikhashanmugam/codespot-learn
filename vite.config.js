import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    plugins: [
        tailwindcss()
    ],
    css: {
        preprocessorOptions: {
            scss: {
                // Bootstrap 5.3 still uses Sass @import: hide those warnings
                quietDeps: true,
                silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function']
            }
        }
    }
});
