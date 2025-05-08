import { test, expect } from "@playwright/test"

test('verify dropdown in playwright', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForTimeout(1000)

    //single select dropdown

    await page.locator('#country').selectOption('Germany')
    await page.waitForTimeout(1000)

    await page.locator('#country').selectOption({ label: 'United Kingdom' })
    await page.waitForTimeout(1000)

    await page.locator('#country').selectOption({ index: 4 })
    await page.waitForTimeout(2000)

    await page.selectOption('#country', 'India')
    await page.waitForTimeout(1000)

//assertions
//type 
 const options = await page.locator('#country option')
 await expect(options).toHaveCount(10) //give all locators of options

 const options1 = await page.$$('#country option')
 await expect(options1.length).toBe(10) //give all loactors in array format 


 //text is avaliable in dropdown
 const contents = await page.locator('#country').textContent()
console.log(contents)
expect(contents.includes('Australia')).toBeTruthy()
expect (contents.includes('Austrailiaa')).not.toBeTruthy()


    //check text is available in dropdown with looping


  const option2 = await page.$$('#country option') 
  let status = false 
  await page.waitForTimeout(2000)
  for(let option of option2){
    let optiontext = await option.textContent()
    if(optiontext.includes('China')){
        status= true
        console.log(`option tyext is --- ${optiontext}`)
        await page.selectOption('#country',optiontext.trim())
        break

    }
  }  






})