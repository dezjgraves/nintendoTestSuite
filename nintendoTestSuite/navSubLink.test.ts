import { nintendoWeb } from "./navbarPageObject";
const nintendo = new nintendoWeb();
const fs = require('fs');
const { until } = require('selenium-webdriver');

describe("Clicking all sub links", () => {
    beforeAll(async () => {
        await nintendo.openPage();
    });

    afterAll(async () => {
        await nintendo.driver.quit();
    });

    beforeEach(async () => {
        await nintendo.openPage();
        await nintendo.storeLinks();
    });

    test('Click Link 1', async () => {
        await nintendo.getElement(nintendo.storeLink1);
        let name1 = await nintendo.getText(nintendo.storeLink1);
        await nintendo.click(nintendo.storeLink1);
        await nintendo.getElement(nintendo.storeFilter);
        let url1 = await nintendo.driver.getCurrentUrl();
        expect(url1).toContain("/store");

        fs.appendFile(`${__dirname}/testResults.txt`, url1, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ ${name1} reached: ☼☼☼☼☼☼`);
        });        
    });

    test('Click Link 2', async () => {
        await nintendo.getElement(nintendo.storeLink2);
        let name1 = await nintendo.getText(nintendo.storeLink2);
        await nintendo.click(nintendo.storeLink2);
        await nintendo.getElement(nintendo.storeFilter);
        let url1 = await nintendo.driver.getCurrentUrl();
        expect(url1).toContain("/store");

        fs.appendFile(`${__dirname}/testResults.txt`, url1, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ ${name1} reached: ☼☼☼☼☼☼`);
        });        
    });

    test('Click Link 3', async () => {
        await nintendo.getElement(nintendo.storeLink3);
        let name1 = await nintendo.getText(nintendo.storeLink3);
        await nintendo.click(nintendo.storeLink3);
        await nintendo.getElement(nintendo.storeFilter);
        let url1 = await nintendo.driver.getCurrentUrl();
        expect(url1).toContain("/store");

        fs.appendFile(`${__dirname}/testResults.txt`, url1, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ ${name1} reached: ☼☼☼☼☼☼`);
        });        
    });

    test('Click Link 4', async () => {
        await nintendo.getElement(nintendo.storeLink4);
        let name1 = await nintendo.getText(nintendo.storeLink4);
        await nintendo.click(nintendo.storeLink4);
        await nintendo.getElement(nintendo.storeFilter);
        let url1 = await nintendo.driver.getCurrentUrl();
        expect(url1).toContain("/store");

        fs.appendFile(`${__dirname}/testResults.txt`, url1, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ ${name1} reached: ☼☼☼☼☼☼`);
        });        
    }); 

    test('Click Link 5', async () => {
        await nintendo.getElement(nintendo.storeLink5);
        let name1 = await nintendo.getText(nintendo.storeLink5);
        await nintendo.click(nintendo.storeLink5);
        await nintendo.getElement(nintendo.storeFilter);
        let url1 = await nintendo.driver.getCurrentUrl();
        expect(url1).toContain("/store");

        fs.appendFile(`${__dirname}/testResults.txt`, url1, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ ${name1} reached: ☼☼☼☼☼☼`);
        });        
    });

    
    test('Click Link 6', async () => {
        await nintendo.getElement(nintendo.storeLink6);
        let name1 = await nintendo.getText(nintendo.storeLink6);
        await nintendo.click(nintendo.storeLink5);
        await nintendo.getElement(nintendo.storeFilter);
        let url1 = await nintendo.driver.getCurrentUrl();
        expect(url1).toContain("/store");

        fs.appendFile(`${__dirname}/testResults.txt`, url1, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ ${name1} reached: ☼☼☼☼☼☼`);
        });        
    });

    
    test('Click Link 7', async () => {
        await nintendo.getElement(nintendo.storeLink7);
        let name1 = await nintendo.getText(nintendo.storeLink7);
        await nintendo.click(nintendo.storeLink5);
        await nintendo.getElement(nintendo.storeFilter);
        let url1 = await nintendo.driver.getCurrentUrl();
        expect(url1).toContain("/store");

        fs.appendFile(`${__dirname}/testResults.txt`, url1, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ ${name1} reached: ☼☼☼☼☼☼`);
        });        
    });

    
    test('Click Link 5', async () => {
        await nintendo.getElement(nintendo.storeLink8);
        let name1 = await nintendo.getText(nintendo.storeLink8);
        await nintendo.click(nintendo.storeLink8);
        await nintendo.getElement(nintendo.storeFilter);
        let url1 = await nintendo.driver.getCurrentUrl();
        expect(url1).toContain("/store");

        fs.appendFile(`${__dirname}/testResults.txt`, url1, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ ${name1} reached: ☼☼☼☼☼☼`);
        });        
    });

    
    test('Click Link 9', async () => {
        await nintendo.getElement(nintendo.storeLink5);
        let name1 = await nintendo.getText(nintendo.storeLink9);
        await nintendo.click(nintendo.storeLink9);
        await nintendo.getElement(nintendo.storeFilter);
        let url1 = await nintendo.driver.getCurrentUrl();
        expect(url1).toContain("/store");

        fs.appendFile(`${__dirname}/testResults.txt`, url1, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ ${name1} reached: ☼☼☼☼☼☼`);
        });        
    });

    
    test('Click Link 10', async () => {
        await nintendo.getElement(nintendo.storeLink5);
        let name1 = await nintendo.getText(nintendo.storeLink10);
        await nintendo.click(nintendo.storeLink10);
        await nintendo.getElement(nintendo.storeFilter);
        let url1 = await nintendo.driver.getCurrentUrl();
        expect(url1).toContain("/store");

        fs.appendFile(`${__dirname}/testResults.txt`, url1, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ ${name1} reached: ☼☼☼☼☼☼`);
        });        
    });

    
    test('Click Link 11', async () => {
        await nintendo.getElement(nintendo.storeLink5);
        let name1 = await nintendo.getText(nintendo.storeLink11);
        await nintendo.click(nintendo.storeLink11);
        await nintendo.getElement(nintendo.storeFilter);
        let url1 = await nintendo.driver.getCurrentUrl();
        expect(url1).toContain("/store");

        fs.appendFile(`${__dirname}/testResults.txt`, url1, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ ${name1} reached: ☼☼☼☼☼☼`);
        });        
    });

    
    test('Click Link 12', async () => {
        await nintendo.getElement(nintendo.storeLink12);
        let name1 = await nintendo.getText(nintendo.storeLink12);
        await nintendo.click(nintendo.storeLink5);
        await nintendo.getElement(nintendo.storeFilter);
        let url1 = await nintendo.driver.getCurrentUrl();
        expect(url1).toContain("/store");

        fs.appendFile(`${__dirname}/testResults.txt`, url1, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ ${name1} reached: ☼☼☼☼☼☼`);
        });        
    });

    test('Click Link 13', async () => {
        await nintendo.getElement(nintendo.storeLink13);
        let name1 = await nintendo.getText(nintendo.storeLink13);
        await nintendo.click(nintendo.storeLink5);
        await nintendo.getElement(nintendo.storeFilter);
        let url1 = await nintendo.driver.getCurrentUrl();
        expect(url1).toContain("/store");

        fs.appendFile(`${__dirname}/testResults.txt`, url1, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ ${name1} reached: ☼☼☼☼☼☼`);
        });        
    });
    
    test('Click Link 14', async () => {
        await nintendo.getElement(nintendo.storeLink14);
        let name1 = await nintendo.getText(nintendo.storeLink14);
        await nintendo.click(nintendo.storeLink5);
        await nintendo.getElement(nintendo.storeFilter);
        let url1 = await nintendo.driver.getCurrentUrl();
        expect(url1).toContain("/store");

        fs.appendFile(`${__dirname}/testResults.txt`, url1, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ ${name1} reached: ☼☼☼☼☼☼`);
        });        
    });
    
    test('Click Link 5', async () => {
        await nintendo.getElement(nintendo.storeLink15);
        let name1 = await nintendo.getText(nintendo.storeLink15);
        await nintendo.click(nintendo.storeLink15);
        await nintendo.getElement(nintendo.storeFilter);
        let url1 = await nintendo.driver.getCurrentUrl();
        expect(url1).toContain("/store");

        fs.appendFile(`${__dirname}/testResults.txt`, url1, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ ${name1} reached: ☼☼☼☼☼☼`);
        });        
    });
    
    test('Click Link 5', async () => {
        await nintendo.getElement(nintendo.storeLink16);
        let name1 = await nintendo.getText(nintendo.storeLink16);
        await nintendo.click(nintendo.storeLink16);
        await nintendo.getElement(nintendo.storeFilter);
        let url1 = await nintendo.driver.getCurrentUrl();
        expect(url1).toContain("/store");

        fs.appendFile(`${__dirname}/testResults.txt`, url1, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ ${name1} reached: ☼☼☼☼☼☼`);
        });        
    });

    
    test('Click Link 17', async () => {
        await nintendo.getElement(nintendo.storeLink5);
        let name1 = await nintendo.getText(nintendo.storeLink17);
        await nintendo.click(nintendo.storeLink17);
        await nintendo.getElement(nintendo.storeFilter);
        let url1 = await nintendo.driver.getCurrentUrl();
        expect(url1).toContain("/store");

        fs.appendFile(`${__dirname}/testResults.txt`, url1, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ ${name1} reached: ☼☼☼☼☼☼`);
        });        
    });
    
    test('Click Link 5', async () => {
        await nintendo.getElement(nintendo.storeLink18);
        let name1 = await nintendo.getText(nintendo.storeLink18);
        await nintendo.click(nintendo.storeLink18);
        await nintendo.getElement(nintendo.storeFilter);
        let url1 = await nintendo.driver.getCurrentUrl();
        expect(url1).toContain("/store");

        fs.appendFile(`${__dirname}/testResults.txt`, url1, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ ${name1} reached: ☼☼☼☼☼☼`);
        });        
    });
});