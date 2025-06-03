// const { test, expect } = require('@playwright/test')

// //playwright hooks
// //need to set fullyParallel: false, in config.js
// //hooks------------
// let page
// test.beforeAll(async ({ browser }) => {
//     await console.log('i am before all')
//     page = await browser.newPage();


//     //login


//     await page.goto('https://www.demoblaze.com/index.html')
//     await page.click('[id ="login2"]')

//     await page.fill('[id = "loginusername"]', 'snehalk')
//     await page.fill('[id = "loginpassword"]', 'Snehal@123')
//     await page.waitForTimeout(3000)
//     await page.click('[onclick = "login()"]')


// await page.waitForTimeout(3000)

// const logouttext = await page.locator('[id ="logout2"]')
// await expect(logouttext).toBeVisible()

// const username = await page.locator('#nameofuser').textContent()
// await expect(username).toContain('snehal')
// await page.waitForTimeout(2000)

// })


// test.afterAll(async () => {
//     await console.log('i am in after all')
//     //empty cart 
//     let deletecolmn = await page.$$('.table tbody tr td a')
//     for(let el of deletecolmn){
//         let deletecolmn1 = await page.$$('.table tbody tr td a')
//         await deletecolmn1[0].click({Delay: 100})
//                 await page.waitForTimeout(3000)

//     }
//     await page.click('#logout2')
//     await page.waitForTimeout(3000)
// })

// test.beforeEach(async () => {
//     await console.log('i am in before each')
//     await page.click('li a[href="index.html"]')
//     await page.waitForTimeout(3000)
// })

// test.afterEach(async () => {
//     await console.log('i am in after each')
//     await page.click('#cartur')
//     await page.waitForTimeout(3000)
// })


// //testcases--------
// test('testcase1', async () => {
//     console.log('i am in testcase1')
//     await page.locator(`[onclick="byCat('phone')"]`).click()
//     await page.locator('h4 a[href="prod.html?idp_=1"]').click()
//     await page.locator('[onclick="addToCart(1)"]').click()
//     await page.waitForTimeout(3000)
// })
// test('testcase2', async () => {
//     console.log('i am in testcase2')
//     await page.locator(`[onclick="byCat('notebook')"]`).click()
//     await page.locator('h4 a[href="prod.html?idp_=9"]').click()
//     await page.locator('.btn-success').click()
//     await page.waitForTimeout(3000)

// })
// test('testcase3', async () => {
//     console.log('i am in testcase3')
// })

const { test, expect } = require('@playwright/test')

// Playwright Hooks
//need to set fullyParallel: false, in config.js
//hooks------------
let page
test.beforeAll(async ({ browser }) => {
    await console.log('i am in before all')
    page = await browser.newPage();

    //login 
    await page.goto('https://www.demoblaze.com/index.html')
    await page.click('[id="login2"]')

    await page.fill('[id="loginusername"]', 'snehalk')
    await page.fill('[id="loginpassword"]', 'snehal@123')
    await page.waitForTimeout(3000)
    await page.click('[onclick="logIn()"]')

    await page.waitForTimeout(3000)
    const logOutTxt = await page.locator('[id="logout2"]')
    await expect(logOutTxt).toBeVisible()

    const userName = await page.locator('#nameofuser').textContent()
    await expect(userName).toContain('snehalk')
    await page.waitForTimeout(3000)

})

test.afterAll(async () => {
    await console.log('i am in after all')
    //empty cart
    let deleteColumn = await page.$$('.table tbody tr td a')
    for (let el of deleteColumn) {
       let deleteColumn1 = await page.$$('.table tbody tr td a')
        //await page.waitForTimeout(5000)
        await deleteColumn1[0].click({delay : 100})
        await page.waitForTimeout(3000)
    }


    await page.click('#logout2')
    await page.waitForTimeout(3000)
})

test.beforeEach(async () => {
    await console.log('i am in before each')
    await page.click('li a[href="index.html"]')
    await page.waitForTimeout(3000)
})

test.afterEach(async () => {
    await console.log('i am in after each')
    await page.click('#cartur')
    await page.waitForTimeout(3000)
})


//testcases--------
test('testcase1', async () => {
    console.log('i am in testcase1')
    await page.locator(`[onclick="byCat('phone')"]`).click()
    await page.locator('h4 a[href="prod.html?idp_=1"]').click()
    await page.locator('[onclick="addToCart(1)"]').click()
    await page.waitForTimeout(3000)
})
test('testcase2', async () => {
    console.log('i am in testcase2')
    await page.locator(`[onclick="byCat('notebook')"]`).click()
    await page.locator('h4 a[href="prod.html?idp_=9"]').click()
    await page.locator('.btn-success').click()
    await page.waitForTimeout(3000)

})
test('testcase3', async () => {
    console.log('i am in testcase3')
})