import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const routes = [
  "/",
  "/about",
  "/companies",
  "/companies/consult",
  "/companies/pr",
  "/companies/properties",
  "/companies/energy",
  "/companies/logistics",
  "/companies/automobile",
  "/companies/foundation",
  "/what-we-do",
  "/markets",
  "/partnerships",
  "/insights",
  "/insights/a-connected-perspective",
  "/insights/building-from-ghana",
  "/insights/opportunity-beyond-business",
  "/careers",
  "/contact",
  "/privacy",
  "/credits",
];

for (const width of [390, 1440]) {
  test(`All pages render, load images, fit the viewport and pass automated accessibility at ${width}px`, async ({
    page,
  }) => {
    test.setTimeout(240000);
    await page.setViewportSize({ width, height: 1000 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    for (const route of routes) {
      const response = await page.goto(route);
      expect(response?.status(), route).toBe(200);
      await expect(page.locator("main h1"), route).toHaveCount(1);
      await page.evaluate(() => document.fonts.ready);
      // Load lazy photographs before checking intrinsic dimensions and accessibility.
      await page
        .locator("img")
        .evaluateAll((images) =>
          images.forEach((img) => img.setAttribute("loading", "eager")),
        );
      await expect
        .poll(
          () =>
            page
              .locator("img")
              .evaluateAll((images) =>
                images
                  .filter(
                    (image) =>
                      !(image as HTMLImageElement).complete ||
                      (image as HTMLImageElement).naturalWidth === 0,
                  )
                  .map((image) => image.getAttribute("src")),
              ),
          { message: `Images on ${route}`, timeout: 20000 },
        )
        .toEqual([]);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
        `Overflow on ${route}`,
      ).toBe(true);
      const result = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(
        result.violations.map((v) => ({
          id: v.id,
          nodes: v.nodes.map((n) => ({
            target: n.target,
            summary: n.failureSummary,
          })),
        })),
        `Accessibility on ${route}`,
      ).toEqual([]);
    }
    expect(errors).toEqual([]);
  });
}

test("Homepage fits every requested breakpoint", async ({ page }) => {
  await page.goto("/");
  for (const width of [375, 390, 430, 768, 1024, 1280, 1440, 1920, 2560]) {
    await page.setViewportSize({ width, height: 1000 });
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
      `${width}px overflow`,
    ).toBe(true);
    const heading = await page.locator(".hero h1").boundingBox();
    expect(heading!.x + heading!.width).toBeLessThanOrEqual(width);
  }
});

test("Company menu, keyboard selector, philosophy and markets work", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Our companies" });
  await menu.click();
  await expect(page.locator("#companies-menu a")).toHaveCount(8);
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await page.locator("#company-tab-0").focus();
  await page.keyboard.press("ArrowDown");
  await expect(page.locator("#company-panel")).toContainText(
    "Make your story matter.",
  );
  await page.keyboard.press("End");
  await expect(page.locator("#company-panel")).toContainText(
    "Opportunity beyond business.",
  );
  await page.locator("#philosophy-tab-0").focus();
  await page.keyboard.press("End");
  await expect(page.locator("#philosophy-panel")).toContainText(
    "enduring value",
  );
  await page.locator("#market-tab-0").focus();
  await page.keyboard.press("End");
  await expect(page.locator("#market-panel")).toContainText(
    "long-term destination",
  );
  await page
    .locator(".reason-list summary")
    .filter({ hasText: "Partnership" })
    .click();
  await expect(page.locator(".reason-list details[open]")).toContainText(
    "mutual value",
  );
});

test("Mobile navigation contains focus, closes with Escape and follows company links", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const menu = page.getByRole("button", { name: "Open navigation" });
  await menu.click();
  await expect(page.locator("#mobile-menu")).toBeVisible();
  const a11y = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(a11y.violations).toEqual([]);
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Contact", exact: true })
    .focus();
  await page.keyboard.press("Tab");
  await expect(page.locator(".site-header .brand")).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await menu.click();
  await page.locator("#mobile-menu summary").click();
  await page
    .locator("#mobile-menu")
    .getByRole("link", { name: "Concierge Energy", exact: true })
    .click();
  await expect(page).toHaveURL(/companies\/energy/);
  await expect(page.locator("#mobile-menu")).toHaveCount(0);
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
});

test("Enquiry validates and downloads an honest local draft", async ({
  page,
}) => {
  await page.goto("/contact?interest=energy");
  await expect(page.locator("select[name=interest]")).toHaveValue("energy");
  await page
    .getByRole("button", { name: "Prepare enquiry", exact: true })
    .click();
  await expect(page.locator(".form-feedback")).toHaveCount(0);
  await page.getByLabel("Your name").fill("Website QA");
  await page.getByLabel("Email address").fill("qa@example.com");
  await page.getByLabel("Organisation", { exact: true }).fill("Local testing");
  await page.getByLabel("Area of interest").selectOption("logistics");
  await page
    .getByLabel("What would you like to explore?")
    .fill(
      "This is a local test of the enquiry draft. No real enquiry is being submitted.",
    );
  await page.getByRole("checkbox").check();
  await page
    .getByRole("button", { name: "Prepare enquiry", exact: true })
    .click();
  await expect(page.locator(".form-feedback")).toContainText(
    "has not been sent",
  );
  await expect(page.locator(".form-feedback pre")).toContainText(
    "Concierge Logistics",
  );
  const download = page.waitForEvent("download");
  await page.getByRole("button", { name: "Download enquiry" }).click();
  expect((await download).suggestedFilename()).toBe("concierge-enquiry.txt");
});

test("Internal navigation targets and fragments exist", async ({
  page,
  request,
}) => {
  test.setTimeout(120000);
  const targets = new Set<string>();
  for (const route of routes) {
    await page.goto(route);
    for (const href of await page
      .locator("a[href]")
      .evaluateAll((links) =>
        links
          .map((a) => a.getAttribute("href")!)
          .filter((h) => h.startsWith("/") || h.startsWith("#")),
      )) {
      const target = new URL(href, new URL(route, "http://localhost:3000"));
      if (target.hash) {
        if (target.pathname === route)
          expect(
            await page.locator(`[id="${target.hash.slice(1)}"]`).count(),
            `${route}${target.hash}`,
          ).toBeGreaterThan(0);
        else targets.add(target.pathname + target.hash);
      } else targets.add(target.pathname);
    }
  }
  for (const target of targets) {
    const response = await request.get(target.split("#")[0]);
    expect(response.status(), target).toBe(200);
    if (target.includes("#"))
      expect(await response.text(), target).toContain(
        `id="${target.split("#")[1]}"`,
      );
  }
});

test("Unknown pages and invalid enquiries return appropriate statuses", async ({
  request,
}) => {
  expect((await request.get("/companies/does-not-exist")).status()).toBe(404);
  expect((await request.get("/insights/does-not-exist")).status()).toBe(404);
  expect(
    (await request.post("/api/enquiry", { data: { name: "x" } })).status(),
  ).toBe(400);
  expect(
    (
      await request.post("/api/enquiry", {
        data: {
          name: "QA Test",
          email: "test@example.com",
          organisation: "Local QA",
          interest: "general",
          message: "Local test enquiry that must not be delivered.",
          consent: true,
        },
      })
    ).status(),
  ).toBe(503);
  expect(
    (
      await request.post("/api/enquiry", {
        headers: { Origin: "https://unrelated.example" },
        data: {},
      })
    ).status(),
  ).toBe(403);
});
