const { expect, test } = require('@playwright/test') 

test('verify i frames in playwright',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/')
    //get total no of frames

    let framecount = await page.frames()
    console.log(`total no of frames are ${framecount.length}`)

//type 1 
//Frame1
const Frame1 = await page.frameLocator('frame[src="frame_1.html"]').locator('input[name="mytext1"]')
    await Frame1.fill('snehal')

//frame2

const Frame2 = await page.frameLocator('[src="frame_2.html"]')
await Frame2.locator('[name = "mytext2"]').fill("Kamble")

//type2 

    //get by name or get bu url
    //let frameName = await page.frame('name')


//get by URL 

const frame2 = await page.frame({url :'https://ui.vision/demo/webtest/frames/frame_4.html'})
await frame2.fill('[name ="mytext4"]','Snehal')

await page.waitForTimeout(2000)


    //getting child frames

    const frame3 = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' })

    await frame3.fill('[name="mytext3"]', 'harsha')

    const childFrame3 = await frame3.childFrames() //in array format
    //await childFrame3[0].locator('[id="i6"]').click()

    const child1F3 = await childFrame3[0]
    await child1F3.click('[id="i6"]')
    await child1F3.click('[id="i9"]')



    await page.waitForTimeout(5000)




})
