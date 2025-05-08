import { test, expect } from "@playwright/test"

test('verify check box in playwright',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#sunday').click()
    await page.waitForTimeout(3000)
    await page.locator('#sunday').click()

    await page.locator('#monday').check()
    await page.waitForTimeout(3000)
    await page.locator('#monday').check()
    await page.waitForTimeout(3000)

    
    //check multiple check box
    const chechboxes =[
        '#sunday',
        '#monday',
        '#tuesday',
        '#wednesday',
        '[id="friday"]',

    ]

    for(let el of chechboxes){
        await page.check(el)


    }
    await page.waitForTimeout(3000)
    for(let el of chechboxes){
        if(await page.locator(el).isChecked()){
           await page.uncheck(el)
        }
    }
    await page.waitForTimeout(3000)
})

