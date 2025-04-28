// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    timeout: 60000,
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        video: 'off',
        screenshot: 'on',
        launchOptions: {
            args: ['--disable-http2']
        }
    },
    projects: [
        // {
        //     name: 'chromium', // Nombre corregido para que coincida con el navegador
        //     use: {
        //         browserName: 'chromium',
        //     },
        // },
        {
            name: 'firefox',
            use: {
                browserName: 'firefox',
            },
        }
    ],
});