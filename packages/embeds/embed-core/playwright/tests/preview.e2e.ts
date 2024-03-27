import { expect } from "@playwright/test";

import { test } from "@calcom/web/playwright/lib/fixtures";

test.describe("Preview", () => {
  test("Preview - embed-core should load", async ({ page }) => {
    await page.goto(
      "https://cal-dot-com-ai.vercel.app/embed/preview.html?embedLibUrl=https://cal-dot-com-ai.vercel.app/embed/embed.js&bookerUrl=https://cal-dot-com-ai.vercel.app&calLink=pro/30min"
    );
    const libraryLoaded = await page.evaluate(() => {
      return new Promise((resolve) => {
        setInterval(() => {
          if (
            (
              window as unknown as {
                Cal: {
                  __css: string;
                };
              }
            ).Cal.__css
          ) {
            resolve(true);
          }
        }, 1000);
      });
    });
    expect(libraryLoaded).toBe(true);
  });
});
