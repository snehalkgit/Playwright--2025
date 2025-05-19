import { test, expect } from "@playwright/test"

test('verify table in playwright', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    let table = await page.locator('#productTable')

    //rows and column of table 

    const columns = await table.locator('thead tr th')
    console.log(`total no of column = ${await columns.count()}`)


    const rows = await table.locator('tbody tr')
    console.log(`total no of rows = ${await rows.count()}`)


    expect(await columns.count()).toBe(4)
    expect(await rows.count()).toBe(5)


    //select any one products 

    let matchedrow = rows.filter({
        has: page.locator('td'),
        hasText : "Tablet",
    })

    await matchedrow.locator('input').click()

    await page.waitForTimeout(4000)
})

