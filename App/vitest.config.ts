import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: ['src/**/*.test.{ts,tsx,js,jsx}'],
        exclude: ['**/node_modules/**', '**/e2e/**', '**/dist/**']
    }
});
