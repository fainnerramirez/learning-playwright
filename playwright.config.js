import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: 'tests',
    fullyParallel: true,
    retries: 1,
    workers: 1,
    reporter: 'html',
    use: {
        screenshot: 'on',
        trace: 'on',
        video: 'off'
        // Capture screenshot after each test failure.
        // screenshot: 'only-on-failure',
        // // Record trace only when retrying a test for the first time.
        // trace: 'on-first-retry',
        // // Record video only when retrying a test for the first time.
        // video: 'on-first-retry'
    }
});