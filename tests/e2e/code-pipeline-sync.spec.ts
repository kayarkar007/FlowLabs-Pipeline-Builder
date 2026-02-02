import { test, expect } from '@playwright/test';

test.describe('Code-Pipeline Sync', () => {
    test.beforeEach(async ({ page }: { page: any }) => {
        await page.goto('http://localhost:5173');
    });

    test('Sync Code to Pipeline', async ({ page }: { page: any }) => {
        // 1. Enter code in editor
        const editor = page.locator('.monaco-editor').first();
        await editor.click();

        // Robustly set code using keyboard
        await page.waitForTimeout(500); // Wait for editor focus stability
        await page.keyboard.press('Control+A');
        await page.keyboard.press('Delete');
        await page.waitForTimeout(100);
        await page.keyboard.insertText('const x = 10;');

        // 2. Click Sync to Pipeline
        await page.click('text=Sync to Pipeline');

        // 3. Verify node exists in canvas
        // We filter by text because 'const x = 10;' creates two nodes: "Literal: 10" and "const x"
        const node = page.locator('.react-flow__node-input').filter({ hasText: 'const x' }).first();
        await expect(node).toBeVisible();
    });

    test('Sync Pipeline to Code', async ({ page }: { page: any }) => {
        // 1. Add a node
        await page.click('button:has-text("Add Nodes")');
        await page.click('text=Input');

        // 2. Click Sync to Code
        await page.click('text=Sync to Code');

        // 3. Verify code in editor
        const editor = page.locator('.monaco-editor').first();
        await expect(editor).toContainText('const'); // Depends on emitter output
    });
});
