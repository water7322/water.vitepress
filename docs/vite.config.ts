import { defineConfig } from 'vite';
import markdownPlugin from '../@water768/markdown-plugin';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    return {
        plugins: [markdownPlugin()]
    };
});
