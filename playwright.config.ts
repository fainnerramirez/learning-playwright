// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 30000,
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        video: 'off',
        screenshot: 'on',
    },
    projects: [
        {
            name: 'Chrome',
            use: {
                browserName: 'chromium',
            },
        },
    ],
});