const{test,expect} = require('@playwright/test')

test('verify table in playwright',async({page})=>{
    //js functions for datepicker

    let todaysdate = new Date()
    console.log(`todays date is${todaysdate}`)

    let Tdate = todaysdate.getDate()
    console.log(`todays date is ${Tdate}`)


    let Tmonth = todaysdate.getMonth()
    console.log(`todays month number is ${Tmonth}`)

    let monthshort = todaysdate.toLocaleDateString('defaukt',{month: 'short'})
    console.log(`todays month short is ${monthshort}`)
    

    let monthlong = todaysdate.toLocaleDateString('default',{month : 'long'})

    console.log(`todays month long is ${monthlong}`)


    let year = todaysdate.getFullYear()
    console.log(`todays year is ${year}`)
})
