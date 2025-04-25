import { Page } from '@playwright/test';

declare module '@playwright/test' {
    interface Page {
        isElementPresent(selector: string): Promise<boolean>;
        selectOrigin(origin: string): Promise<void>;
        selectDestination(destination: string): Promise<void>;
    }
}