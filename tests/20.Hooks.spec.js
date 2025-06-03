const{test,expect} = require ('@playwright/test')


//// Playwright Hooks

// beforeEach: This hook is executed before each individual test.
// afterEach: This hook is executed after each individual test.

// beforeAll: This hook is executed once before any of the tests start running.
// afterAll: This hook is executed once after all the tests have been run.
//need to set fullyParallel: false, in config.js



 //hooks

 let pages 
 test.beforeAll(async({browser})=>{
    await console.log('i am before all')
 })

 test.afterAll(async()=>{
    await console.log('i am afterall')
 })

 test.beforeEach(async()=>{
    await console.log('i am berforeach ')
 })

 test.afterEach(async()=>{
    await console.log('i am aftereach')
 })


 //testcases

 test('testcase',async()=>{
    console.log('i am  testcases1')
 })
 test('testcase2',async()=>{
    console.log('i am  testcases2')
 })

  test('testcase3',async()=>{
    console.log('i am  testcases3')
 })

