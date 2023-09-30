import { nintendoWeb } from "./navbarPageObject";
const nintendo = new nintendoWeb();
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
        await nintendo.openPage();
    });

    test('Click Homepage', async () => {
        await nintendo.driver.findElement(nintendo.homeBtn);
        await nintendo.getElement(nintendo.homeBtn);
        await nintendo.click(nintendo.homeBtn);
        await nintendo.getElement(nintendo.heroSlider);
        let homeUrl = await nintendo.driver.getCurrentUrl();
        expect(homeUrl).toBe("https://www.nintendo.com/");

        fs.appendFile(`${__dirname}/testResults.txt`, homeUrl, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ Homepage reached: ${homeUrl} ☼☼☼☼☼☼`);
        });        
    });

    test('Access search bar', async () => {
        await nintendo.getElement(nintendo.searchBar);
        await nintendo.click(nintendo.searchBar);
        await nintendo.getElement(nintendo.searchClose);
        await nintendo.click(nintendo.searchClose);
        await nintendo.getElement(nintendo.searchBar);
        await nintendo.click(nintendo.searchBar);

        await nintendo.setInput(nintendo.searchInput, `mario\n`);

        let results = await nintendo.getText(nintendo.searchResult);
        expect(results).toContain("Super Mario");

        fs.appendFile(`${__dirname}/testResults.txt`, results, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ Search Accurate ☼☼☼☼☼☼`);
        });        
    });

    test('Click search topics', async () => {
        await nintendo.driver.findElement(nintendo.searchDrop);
        await nintendo.click(nintendo.searchDrop);
        await nintendo.getElement(nintendo.searchDrop);
        let options = await nintendo.getText(nintendo.searchDrop);
        expect(options).toContain("Merchandise");

        fs.appendFile(`${__dirname}/testResults.txt`, options, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ Found Categories ☼☼☼☼☼☼ ${options}`);
        });        
    });

    test('Click Support', async () => {
        await nintendo.driver.findElement(nintendo.supportBtn);
        await nintendo.click(nintendo.supportBtn);
        await nintendo.driver.sleep(1500);
        await nintendo.tabSwitch();
        let supportUrl = await nintendo.driver.getCurrentUrl();
        console.log(`☼☼☼☼☼☼ Opened Support ☼☼☼☼☼☼`);
    });      

    test('Click Cart', async () => {
        await nintendo.driver.findElement(nintendo.cartBtn);
        await nintendo.click(nintendo.cartBtn);
        await nintendo.driver.sleep(1500);
        await nintendo.getElement(nintendo.cartImg);
        let cartUrl = await nintendo.driver.getCurrentUrl();
        expect(cartUrl).toBe("https://www.nintendo.com/cart/");

        fs.writeFile(`${__dirname}/testResults.txt`, cartUrl, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ Opened Shopping Cart ☼☼☼☼☼☼`);
        });      
    });

    // test('Click Wish List', async () => {
    //     await nintendo.driver.findElement(nintendo.wishBtn);
    //     await nintendo.click(nintendo.wishBtn);
    //     await nintendo.driver.sleep(1500);
    //     await nintendo.tabSwitch2
    //     let wishUrl = await nintendo.driver.getCurrentUrl();
    //     expect(wishUrl).toBe("https://www.nintendo.com/wish-list");

    //     fs.writeFile(`${__dirname}/testResults.txt`, wishUrl, (e) => {
    //         if (e) console.log(e);
    //         else console.log(`☼☼☼☼☼☼ Opened Wish List ☼☼☼☼☼☼`);
    //     });     
    // });

    test('Access Login Pane', async () => {
        await nintendo.getElement(nintendo.loginBtn);
        await nintendo.click(nintendo.loginBtn);
        await nintendo.getElement(nintendo.loginBox);
        let loginOpen = await nintendo.getText(nintendo.loginBox);
        await nintendo.click(nintendo.loginClose);
        expect(loginOpen).toContain("Order status");

        fs.appendFile(`${__dirname}/testResults.txt`, loginOpen, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ Login Opened ☼☼☼☼☼☼`);
        });        
    });

    test('Access Store Pane', async () => {
        await nintendo.getElement(nintendo.storeDrop);
        await nintendo.click(nintendo.storeDrop);
        await nintendo.getElement(nintendo.storeBox);
        let openStore = await nintendo.getText(nintendo.storeBox);
        await nintendo.click(nintendo.closeDrop);
        expect(openStore).toContain("Shop all");

        fs.appendFile(`${__dirname}/testResults.txt`, openStore, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ Store Menu Opened ☼☼☼☼☼☼`);
        });        
    });

    test('Access Games Pane', async () => {
        await nintendo.getElement(nintendo.gamesDrop);
        await nintendo.click(nintendo.gamesDrop);
        await nintendo.getElement(nintendo.gamesBox);
        let openGames = await nintendo.getText(nintendo.gamesBox);
        await nintendo.click(nintendo.closeDrop2);
        expect(openGames).toContain("Coming soon");

        fs.appendFile(`${__dirname}/testResults.txt`, openGames, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ Games Menu Opened ☼☼☼☼☼☼`);
        });        
    });

    test('Access Nintendo Switch Pane', async () => {
        await nintendo.getElement(nintendo.switchDrop);
        await nintendo.click(nintendo.switchDrop);
        await nintendo.getElement(nintendo.switchBox);
        let openSwitch = await nintendo.getText(nintendo.switchBox);
        await nintendo.click(nintendo.closeDrop2);
        expect(openSwitch).toContain("Online service");

        fs.appendFile(`${__dirname}/testResults.txt`, openSwitch, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ Games Menu Opened ☼☼☼☼☼☼`);
        });
    });   

    test('Access Play Nintendo Pane', async () => {
        await nintendo.getElement(nintendo.playDrop);
        await nintendo.click(nintendo.playDrop);
        await nintendo.getElement(nintendo.playBox);
        let openPlay = await nintendo.getText(nintendo.playBox);
        await nintendo.click(nintendo.closeDrop2);
        expect(openPlay).toContain("For parents");

        fs.appendFile(`${__dirname}/testResults.txt`, openPlay, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ Play Menu Opened ☼☼☼☼☼☼`);
        });       
    });
});
