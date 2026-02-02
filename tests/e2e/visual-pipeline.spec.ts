import { test, expect } from '@playwright/test';

test.describe('Visual Pipeline Foundation', () => {
    test.beforeEach(async ({ page }: { page: any }) => {
        await page.goto('http://localhost:5173');
    });

    test('TC-P1-01: Node Drag & Drop', async ({ page }: { page: any }) => {
        // 1. Add a node from the palette
        await page.click('button:has-text("Add Nodes")');
        await page.click('text=Input');

        const node = page.locator('.react-flow__node-input').first();
        await expect(node).toBeVisible();

        const initialBox = await node.boundingBox();
        if (!initialBox) throw new Error('Could not find node bounding box');

        // 2. Drag the node using the label (avoiding nodrag input)
        const label = node.locator('text=Input').first();
        await label.hover();
        await page.mouse.down();
        await page.mouse.move(initialBox.x + 200, initialBox.y + 200);
        await page.mouse.up();

        const finalBox = await node.boundingBox();
        if (!finalBox) throw new Error('Could not find node bounding box after drag');

        expect(finalBox.x).not.toBe(initialBox.x);
        expect(finalBox.y).not.toBe(initialBox.y);
    });

    test('TC-P1-03: Theme Switch', async ({ page }: { page: any }) => {
        const appContainer = page.locator('html');
        const initialTheme = await appContainer.getAttribute('data-theme');

        // Toggle theme
        await page.click('text=☀️'); // Or 🌙 depending on current state
        const intermediateTheme = await appContainer.getAttribute('data-theme');
        expect(intermediateTheme).not.toBe(initialTheme);

        // Toggle back
        await page.click('button:has-text("☀️"), button:has-text("🌙")');
        const finalTheme = await appContainer.getAttribute('data-theme');
        expect(finalTheme).toBe(initialTheme);
    });

    test('TC-P1-04: Input Node Interaction', async ({ page }: { page: any }) => {
        await page.click('button:has-text("Add Nodes")');
        await page.click('text=Input');

        const inputField = page.locator('.react-flow__node-input input').first();
        await expect(inputField).toBeVisible();
        await inputField.fill('Test Variable');
        await expect(inputField).toHaveValue('Test Variable');
    });
});
