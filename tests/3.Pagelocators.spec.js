const {test, expect} = require('@playwright/test')

test("verify basic locators in playwright",async({page})=>{
    await page.goto('https://www.demoblaze.com/index.html')
    //  await page.locator('[id= "login2"]').click()
    //  await page.locator('[id = "loginusername"]').fill("Snehal")
    //  await page.locator('[id="loginpassword"]').fill("snehal@123")
    //  await page.locator('[onclick="logIn()"]').click()
    //  await page.waitForTimeout(3000)
    //  //const logOutTxt = await page.locator('[id="logout2"]').textContent()

    // await expect(logOutTxt).toBe('Log out')


    // example 2

await page.click('[id="login2"]')

    await page.fill('[id="loginusername"]' , 'snehal')
    await page.fill('[id="loginpassword"]' ,'snehal@123' )
    await page.waitForTimeout(3000)
    
    await page.click('[onclick="logIn()"]')
   

    await page.waitForTimeout(3000)
    const logOutTxt = await page.locator('[id="logout2"]')

    await expect(logOutTxt).toBeVisible()
    await page.waitForTimeout(3000)

    await expect(logOutTxt).toBeVisible()

    const userName = await page.locator('#nameofuser').textContent()
    await expect(userName).toContain('snehal')
    await page.waitForTimeout(3000)
})


