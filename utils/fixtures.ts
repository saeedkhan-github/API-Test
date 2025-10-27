import { test as base } from "@playwright/test"
import { RequestHandler } from "./request-handler"

export type TestOptions = {
    api: RequestHandler;
}

export const test = base.extend<TestOptions>({
    api: async ({}, use) => {
        const api = new RequestHandler();
        await use(api);
    }
})