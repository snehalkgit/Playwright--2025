import{test,expect} from "@playwright/test"

 test('verify dropdown in playwright',async({page})=>{
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')
    await page.click('.btn-group')

    //count option
    let options = await page.locator('ul > li >a > label >input')
    await expect(options).toHaveCount(11)


let option1 = await page.$$('ul > li >a > label')
await expect ( option1.length).toBe(14)

// print options

let option2 = await page.$$('ul > li > a> label')
for (let el of option2){
console.log(await el.textContent())
}

//find presence of option 

let status = true
for (let el of option2){
    let optionnm = await el.textContent()
    if ( optionnm.includes('MS SQL Server')){
        status = true 
        break
    }
}
await expect(status).toBeTruthy()


//print option

let option3 = await page.$$('ul > li > a > label.checkbox')
for(let el of option3){
    console.log(await el.textContent())
}

//select single options 
for(let el of option3){
    let opntext = await el.textContent()
    if(opntext == "Python"){
        el.check()
    }
}


// select multiple options
let optiontoselect = [" java","MySQL","Oracel"]
for (let el of option3){
    let opntext = await el.textContent()
    if(optiontoselect.includes(opntext)){
        await el.check()
    }

}
 //check unchecked options
    for (let opn of option3) {
        await opn.check()
    }
// check unchecked options---type1
    for (let opn of option3) {
        await opn.uncheck()
    }

    //uncheck checked options ---type2
    for (let opn of option3) {
        if(await opn.isChecked())
        await opn.click()
    }

    //check unchecked options
    for (let opn of option3) {
        if (!(await opn.isChecked()))
            await opn.click()
    }

    // uncheck all
    for (let opn of option3) {
        if ((await opn.isChecked()))
            await opn.click()
    }
    await page.waitForTimeout(5000)


 })