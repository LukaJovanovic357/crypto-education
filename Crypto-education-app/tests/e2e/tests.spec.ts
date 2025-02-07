import { test, expect } from '@playwright/test';

test('log in', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page
        .getByRole('textbox', { name: 'Email' })
        .fill('jovanovicluka3578@gmail.com');
    await page.getByRole('textbox', { name: 'Email' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('cedo123');
    await page.locator('form').getByRole('button', { name: 'Sign In' }).click();
});

test('visit learning resources', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page
        .getByRole('textbox', { name: 'Email' })
        .fill('jovanovicluka3578@gmail.com');
    await page.getByRole('textbox', { name: 'Email' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('cedo123');
    await page.locator('form').getByRole('button', { name: 'Sign In' }).click();
    await page
        .getByRole('link', { name: 'Cryptocurrency Basics Learn' })
        .click();
    await page
        .getByRole('link', { name: 'Blockchain Blockchain is a' })
        .getByRole('button')
        .click();
    await page.getByRole('button', { name: 'Go Back' }).click();
    await page.getByRole('button', { name: 'Go Back' }).click();
    await page.getByRole('link', { name: 'Trading Fundamentals' }).click();
    await page
        .getByRole('link', { name: 'Technical Analysis Technical' })
        .getByRole('button')
        .click();
    await page.getByRole('button', { name: 'Go Back' }).click();
    await page.getByRole('button', { name: 'Go Back' }).click();
});

test('test', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page
        .getByRole('textbox', { name: 'Email' })
        .fill('jovanovicluka3578@gmail.com');
    await page.getByRole('textbox', { name: 'Email' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('cedo123');
    await page.locator('form').getByRole('button', { name: 'Sign In' }).click();
    await page
        .getByRole('navigation')
        .getByRole('link', { name: 'Resources' })
        .click();
    await page
        .locator('div')
        .filter({
            hasText:
                /^Bitcoin WhitepaperThe original Bitcoin whitepaper by Satoshi NakamotoVisit Link$/
        })
        .getByRole('link')
        .click();
});

test('visit quiz', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page
        .getByRole('textbox', { name: 'Email' })
        .fill('jovanovicluka3578@gmail.com');
    await page.getByRole('textbox', { name: 'Email' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('cedo123');
    await page.locator('form').getByRole('button', { name: 'Sign In' }).click();
    await page
        .getByRole('navigation')
        .getByRole('link', { name: 'Quiz' })
        .click();
    await page
        .locator('div')
        .filter({ hasText: /^TopicSelect topicBitcoinEthereumNFTDeFi$/ })
        .getByRole('combobox')
        .selectOption('Bitcoin');
    await page
        .locator('div')
        .filter({
            hasText: /^DifficultySelect difficultyBeginnerIntermediateAdvanced$/
        })
        .getByRole('combobox')
        .selectOption('beginner');
});

test('glossary page', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page
        .getByRole('textbox', { name: 'Email' })
        .fill('jovanovicluka3578@gmail.com');
    await page.getByRole('textbox', { name: 'Email' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('cedo123');
    await page.locator('form').getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Glossary' }).click();
    await page.getByRole('textbox', { name: 'Search for a term...' }).click();
    await page
        .getByRole('textbox', { name: 'Search for a term...' })
        .fill('ad');
    await expect(
        page
            .locator('div')
            .filter({ hasText: 'AddressA unique identifier' })
            .nth(3)
    ).toBeVisible();
});

test('visit crypto news page', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page
        .getByRole('textbox', { name: 'Email' })
        .fill('jovanovicluka3578@gmail.com');
    await page.getByRole('textbox', { name: 'Email' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('cedo123');
    await page.locator('form').getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Crypto-news' }).click();
});

test('visit currency calculator', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page
        .getByRole('textbox', { name: 'Email' })
        .fill('jovanovicluka3578@gmail.com');
    await page.getByRole('textbox', { name: 'Email' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('cedo123');
    await page.locator('form').getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Currency-calculator' }).click();
    await expect(
        page.locator('div').filter({ hasText: 'Currency CalculatorYou' }).nth(1)
    ).toBeVisible();
});

test('visit learning-path page', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page
        .getByRole('textbox', { name: 'Email' })
        .fill('jovanovicluka3578@gmail.com');
    await page.getByRole('textbox', { name: 'Email' }).press('Tab');
    await page.getByRole('textbox', { name: 'Password' }).fill('cedo123');
    await page.locator('form').getByRole('button', { name: 'Sign In' }).click();
    await page.getByRole('link', { name: 'Learning-path' }).click();
    await page
        .locator('div')
        .filter({ hasText: /^Level 1Bitcoin Basics$/ })
        .getByRole('img')
        .click();
    await expect(page.getByText('Bitcoin BasicsIntroduction to')).toBeVisible();
    await page.getByRole('button', { name: 'Close' }).click();
});
