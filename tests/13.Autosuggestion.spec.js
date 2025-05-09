import { expect, test } from "@playwright/test";

test("verify autosuggestive dropdown",async({page})=>{
    await page.goto('https://www.redbus.in/')

    await page.locator('#src').fill('nag')
    await page.waitForSelector('ul > li.sc-iwsKbI >div >text.placeHolderMainText')

    let fromOption = await page.$$('ul > li.sc-iwsKbI >div >text.placeHolderMainText')

    for(let el of fromOption){
        console.log(await el.textContent())
       let opnText = await el.textContent()
        if(opnText=='Chatrapathi'){
            await el.click()
            break;
        }

    }

    await page.waitForTimeout(3000)
})