import { Page } from '@playwright/test';

declare module '@playwright/test' {
    interface Page {
        isElementPresent(selector: string): Promise<boolean>;
        selectOriginFlight(origin: string): Promise<void>;
        selectDestinationFlight(destination: string): Promise<void>;
    }
}