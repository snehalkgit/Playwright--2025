import { test, expect } from "@playwright/test"
test('verify assertions in playwright', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/')

await page.fill('#name', 'snehal')
//await page.locator('#name').fill('snheal')

await page.fill('#email', 'snehal@gmail.com')
await page.fill('#phone', '9284496572')
await page.fill('#textarea', 'hi')

//radio buttons
let male = await page.locator('#male')
await expect(male).not.toBeChecked()
await male.check()
await expect(male).toBeChecked()
await expect(male.isChecked()).toBeTruthy()

expect(await page.locator('//*[@id="female"]').isChecked()).toBeFalsy()

await page.waitForTimeout(3000)


})

