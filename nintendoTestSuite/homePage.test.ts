import { nintendoWeb } from "./homePageObject";
const nintendo = new nintendoWeb();
const fs = require('fs');
const { until } = require('selenium-webdriver');

describe('Testing homepage exclusive objects', () => {
    afterAll(async () => {
        await nintendo.driver.quit();
    });

    beforeEach(async () => {
        await nintendo.openPage();
    });

    // test('Interacting with page hero', async () => {
    //     await nintendo.getElement(nintendo.mainHome);
    //     await nintendo.getElement(nintendo.heroNext);
    //     await nintendo.click(nintendo.heroNext);
    //     await nintendo.getElement(nintendo.heroBack);
    //     await nintendo.click(nintendo.heroBack);
    //     await nintendo.getElement(nintendo.heroPlay);
    //     console.log(`☼☼☼☼☼☼ Carousel Buttons Work ☼☼☼☼☼☼`);
    // });

    // test('Check featured products for consistency', async () => {
    //     await nintendo.getElement(nintendo.featureCard);
    //     await nintendo.getElement(nintendo.featureTitle);
    //     await nintendo.getElement(nintendo.platformLabel);
    //     let title = await nintendo.getText(nintendo.featureTitle);
    //     let platform = await nintendo.getText(nintendo.platformLabel);
    //     await nintendo.click(nintendo.featureCard);
    //     await nintendo.getElement(nintendo.heroInfo);
    //     let details = await nintendo.getText(nintendo.heroInfo);

    //     expect(details).toContain(platform);
    //     fs.appendFile(`${__dirname}/testResults.txt`, platform, (e) => {
    //         if (e) console.log(e);
    //         else console.log(`☼☼☼☼☼☼ Correct Platform ☼☼☼☼☼☼`);
    //     });
    // });

    // test('Check news article for title and date consistency', async () => {
    //     await nintendo.getElement(nintendo.articleCard);
    //     let date = await nintendo.getText(nintendo.articleDate);
    //     let title = await nintendo.getText(nintendo.articleHeading);
    //     await nintendo.click(nintendo.articleCard);
    //     let details = await nintendo.getText(nintendo.articleMain);
    //     expect(details).toContain(date);
    //     expect(details).toContain(title);
    //     fs.appendFile(`${__dirname}/testResults.txt`, `${date} ${title}`, (e) => {
    //         if (e) console.log(e);
    //         else console.log(`☼☼☼☼☼☼ Correct Title and date ${date} ☼☼☼☼☼☼`);
    //     });
    // });

    test ('Recent product shows up in recently viewed', async() => {
        await nintendo.getElement(nintendo.featureCard2);
        await nintendo.getElement(nintendo.featureTitle2);
        let title = await nintendo.getText(nintendo.featureTitle2);
        await nintendo.click(nintendo.featureCard2);
        await nintendo.getElement(nintendo.breadCrumb)
        nintendo.click(nintendo.homeBtn);
        await nintendo.getElement(nintendo.recentItems);
        let itemHistory = await nintendo.getText(nintendo.recentItems);
        expect (itemHistory).toContain(title);
        fs.appendFile(`${__dirname}/testResults.txt`, title, (e) => {
            if (e) console.log(e);
            else console.log(`☼☼☼☼☼☼ Correct title ${title} ☼☼☼☼☼☼`);
        })
    })
});
