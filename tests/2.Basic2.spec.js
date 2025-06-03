//import{Test, expect} from "@playwright/test"

const {test,expect } = require("@playwright/test")

test("verify title and url of page", async ({ page }) => {
    await page.goto('https://www.demoblaze.com/')

    const pagetitle = await page.title
    console.log(`page title ${pagetitle}`)
    console.log(await page.title())
    await expect(page).toHaveTitle('STORE')

    const pageurl = await page.url()
    console.log(pageurl)
    await expect(page).toHaveURL('https://www.demoblaze.com/')
})

