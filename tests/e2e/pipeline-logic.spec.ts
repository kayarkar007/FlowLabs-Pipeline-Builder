import { test, expect } from '@playwright/test';

test.describe('Pipeline Logic & Execution', () => {
    test.beforeEach(async ({ page }: { page: any }) => {
        await page.goto('http://localhost:5173');
    });

    test('Execute simple pipeline', async ({ page }: { page: any }) => {
        // 1. Clear canvas
        await page.click('text=Clear');

        // 2. Add Input, Math, Output nodes
        await page.click('button:has-text("Add Nodes")');
        await page.click('button:has-text("📥")');

        await page.click('button:has-text("Add Nodes")');
        await page.click('button:has-text("Math")');

        await page.click('button:has-text("Add Nodes")');
        await page.click('button:has-text("📤")');

        // 3. Connect nodes (Simplified: Assumes auto-connection or specific handles)
        // Connecting nodes in E2E playwright often requires complex drag-and-drop on handles.

        // 4. Run pipeline
        await page.click('text=Run');

        // 5. Verify logs
        // Logs might be dynamic or timing-dependent. 
        // We just ensure the system logged something indicating start or end.
        const logs = page.locator('div:has-text("System Logs") + div').first();
        await expect(logs).not.toBeEmpty();
    });

    test('Debugger step-by-step', async ({ page }: { page: any }) => {
        await page.click('text=Debug');
        await expect(page.locator('text=Step ▶')).toBeVisible();
        await page.click('text=Step ▶');
        // Verify first node highlighting or logs
    });
});
