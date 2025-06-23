import { expect } from "@playwright/test";

exports.myClass = class myClass {
    constructor(page) {
        this.page = page,
            this.homePage = 'li [href="index.html"]'
        this.url = 'https://www.demoblaze.com/'
        this.loginCss = '#login2',
            this.usernmCss = '#loginusername',
            this.pwCss = '#loginpassword',
            this.loginBtn = '[onclick="logIn()"]',

            this.logoutVisible = '#logout2',
            this.userNameCss = '#nameofuser'

        //catogeries
        this.phoneBtn = `[onclick="byCat('phone')"]`,
            this.monitorBtn = `[onclick="byCat('monitor')"]`,
            this.laptopBtn = `[onclick="byCat('notebook')"]`
        this.singin = "#signin2"



    }


    async visitUrl() {
        await this.page.goto(this.url)
    }

    async login(un, pw) {
        await this.page.click(this.loginCss)
        await this.page.fill(this.usernmCss, un)
        await this.page.fill(this.pwCss, pw)
        await this.page.click(this.loginBtn)
        await expect(this.page.locator(this.logoutVisible)).toBeVisible()
        await expect(this.page.locator(this.userNameCss)).toContainText(un)

    }

    async addToCart(productName, productList) {
        console.log(productName)
        console.log(productList)
        for (let product of productList) {
            await this.page.locator(this.homePage).click()
            await this.page.waitForLoadState('load')
            if (productName == 'phone') {
                await this.page.locator(this.phoneBtn).click()
                await this.page.waitForLoadState('load')
                await this.page.waitForTimeout(2000)
            }
            else if (productName == 'monitor') {
                await this.page.locator(this.monitorBtn).click()
                await this.page.waitForLoadState('load')
                await this.page.waitForTimeout(3000)
            }
            else if (productName == 'laptop') {
                await this.page.locator(this.laptopBtn).click()
                await this.page.waitForLoadState('load')
                await this.page.waitForTimeout(2000)
            }

            await this.page.getByRole('link', { name: product }).click()
            await this.page.getByText('Add to cart').click()
            await this.page.waitForTimeout(3000)

        }
        await this.page.waitForTimeout(3000)
    }

    async emptyCart() {
        // Click on the Cart link to go to the cart page
        await this.page.click('a#cartur');
        await this.page.waitForLoadState('load');
        await this.page.waitForTimeout(2000); // Let cart load

        // Get all 'Delete' links inside the cart table
        const deleteButtons = await this.page.locator('a', { hasText: 'Delete' });

        const count = await deleteButtons.count();
        // await this.page.waitForTimeout(40000)


    }

    async logout() {

        await this.page.click(this.logoutVisible); // Click the logout link
        //await this.page.waitForTimeout(20000)

        //await this.page.locator(this.logoutVisible).click()

    }
    async signInNewUser(un, pw) {
        await this.page.click(this.signUpBtn);
        await this.page.fill(this.usernmCss, un)
        await this.page.fill(this.pwCss, pw)
        await this.locator(this.register()).click()

    }
}




