import {NintendoWeb} from "./productPageObject";
const nintendo = new NintendoWeb();
const fs = require('fs');
const { until } = require('selenium-webdriver');

describe("Testing all functions of the Navbar", () => {
    beforeAll(async () => {
        await nintendo.openPage();
    });

    afterAll(async () => {
        await nintendo.driver.quit();
    });

    beforeEach(async () => {
        
    });

    test('Select an item', async () => {
        await nintendo.getElement(nintendo.itemContainer);
        await nintendo.getElement(nintendo.itemCard);
        await nintendo.getElement(nintendo.itemTitle);
        let title = await nintendo.getText(nintendo.itemTitle);
        await nintendo.getElement(nintendo.itemPrice);
        let price = await nintendo.getText(nintendo.itemPrice);
        await nintendo.click(nintendo.itemCard);
        await nintendo.getElement(nintendo.productTitle);
        let title2 = await nintendo.getText(nintendo.productTitle);
        await nintendo.getElement(nintendo.productPrice)
        let price2 = await nintendo.getText(nintendo.productPrice);
        
        await expect(title2).toContain(title);
        fs.appendFile(`${__dirname}/testResults.txt`, title2, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ Title ${title2} is correct ☼☼☼☼☼☼`);
        });
        await expect(price2).toContain(price);
        fs.appendFile(`${__dirname}/testResults.txt`, price2, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ Price ${price2} is correct ☼☼☼☼☼☼`);
        });
    })

    test ('add and remove items', async () => {
        await nintendo.getElement(nintendo.plusBtn)
        await nintendo.click(nintendo.plusBtn)
        await nintendo.click(nintendo.plusBtn)
        await nintendo.click(nintendo.plusBtn)
        await nintendo.click(nintendo.plusBtn)
        let qty = await nintendo.getText(nintendo.productQty)
        
        await expect(qty).toBe('5');
        fs.appendFile(`${__dirname}/testResults.txt`, qty, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ Added Quantity of ${qty} is correct ☼☼☼☼☼☼`);
        });
        await nintendo.getElement(nintendo.minusBtn)
        await nintendo.click(nintendo.minusBtn)
        await nintendo.click(nintendo.minusBtn)
        let qty2 = await nintendo.getText(nintendo.productQty)
        
        await expect(qty2).toBe('3');
        fs.appendFile(`${__dirname}/testResults.txt`, qty2, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ Subtracted Quantity of ${qty2} is correct ☼☼☼☼☼☼`);
        });
    })

    test ('click checkout', async () =>{
        await nintendo.getElement(nintendo.addCart);
        await nintendo.click(nintendo.addCart);
        await nintendo.getElement(nintendo.checkoutBtn);
        await nintendo.click(nintendo.checkoutBtn)
        let url = await nintendo.driver.getCurrentUrl();
        await expect(url).toBe('https://www.nintendo.com/cart/');
        fs.appendFile(`${__dirname}/testResults.txt`, url, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ Successfully accessed ${url} ☼☼☼☼☼☼`);
        });

    })

});
