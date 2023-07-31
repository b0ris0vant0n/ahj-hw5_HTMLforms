import puppeteer from "puppeteer";

describe("start", () => {
  let browser;
  let page;

  jest.setTimeout(30000);

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage();
  });

  test("page test", async () => {
    await page.goto("http://localhost:5500");

    await page.waitForSelector("body");
  });

  test("popover test", async () => {
    await page.goto("http://localhost:5500");
    const popover = await page.$(".btn");
    await popover.click();
    await page.waitForSelector(".popover");
  }, 30000);

  afterAll(async () => {
    await browser.close();
  });
});
