import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: 'tests',
    fullyParallel: true,
    retries: 1,
    workers: 1,
    reporter: 'html',
    use: {
        screenshot: 'on',
        trace: 'off',
        video: 'off',
        locale: 'es-ES',
        timeout: 60000
    }
});