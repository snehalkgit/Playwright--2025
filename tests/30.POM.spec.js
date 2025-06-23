//POM (Page Object Model) in Playwright is a design pattern used to create an object repository for web elements.
//It helps in maintaining, scaling, and reusing test automation code by separating the test logic from the page structure.
import { expect, test } from "@playwright/test";
import { myClass } from "../Pages/POM30file"
import productList from "../Payload/Productlist.json"

test('verify pom page structure in playwright', async ({ page }) => {
  await page.setDefaultTimeout(60000)
  const hp = new myClass(page)
  await hp.visitUrl()
  await hp.login('snehalk', 'snehal@123')

  await page.waitForTimeout(2000)
  await hp.addToCart('phone', productList.phone)
  await hp.addToCart('laptop',productList.laptop)
  //  await hp.addToCart('phone',productList.phone)
  //  await hp.addToCart('monitar',productList.laptop)
  await hp.emptyCart();
  await hp.logout();

  //await hp.signin()
})  