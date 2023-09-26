import {By} from 'selenium-webdriver';
import {BasePage} from './basePage';

export class nintendoWeb extends BasePage {
    //Home
    homeBtn: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR"])[1]');
    //Search Bar
    searchBar: By = By.xpath('//button[@class="SearchInputstyles__Button-sc-1r59ztq-3 jYcoFG"]');
    searchDrop: By = By.xpath('(//div[@class="SearchInputstyles__Select-sc-1r59ztq-7 bsKuBq css-b62m3t-container"])[1]');
    searchClose: By = By.xpath('(//button[@class="SearchFlyoverstyles__Close-sc-14rqey7-6 bMRZPH"])[1]');
    //Top Links
    supportBtn: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR Topstyles__TopLink-sc-14wlync-2 gXUCck"])[1]');
    wishBtn: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR Topstyles__TopLink-sc-14wlync-2 gXUCck"])[1]');
    cartBtn: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR Topstyles__TopLink-sc-14wlync-2 gXUCck"])[2]');
    loginBtn: By = By.xpath('//button[@class="ButtonLink-sc-1empns-0 bswXBR UserButtonstyles__Button-sc-jxbhoc-0 goYvYP"]');
    loginClose: By = By.xpath('//button[@class="CloseButtonstyles__CloseButton-sc-auhxh6-0 eEsMrv DrawerHeaderstyles__CloseButton-sc-q0gw4c-2 jPtbyp"]');

    //Dropdown Links
    storeDrop: By = By.xpath('(//button[@class="ButtonLink-sc-1empns-0 bswXBR DropdownButtonstyles__Button-sc-m78d24-0 jZacJP"]) [1]');
    gamesDrop: By = By.xpath('(//button[@class="ButtonLink-sc-1empns-0 bswXBR DropdownButtonstyles__Button-sc-m78d24-0 jZacJP"]) [2]');
    switchDrop: By = By.xpath('(//button[@class="ButtonLink-sc-1empns-0 bswXBR DropdownButtonstyles__Button-sc-m78d24-0 jZacJP"]) [3]');
    playDrop: By = By.xpath('(//button[@class="ButtonLink-sc-1empns-0 bswXBR DropdownButtonstyles__Button-sc-m78d24-0 jZacJP"]) [4]');
    closeDrop: By = By.xpath('//button[@class="CloseButtonstyles__CloseButton-sc-auhxh6-0 eEsMrv Awningstyles__AwningClose-sc-12iyqmw-1 fwKpOS"]')
    newsDrop: By = By.xpath('//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownButtonstyles__Button-sc-m78d24-0 jZacJP"]')
    closeDrop2: By = By.xpath('//button[@class="CloseButtonstyles__CloseButton-sc-auhxh6-0 eEsMrv"]');
    closeDrop3: By = By.xpath('//button[@class="CloseButtonstyles__CloseButton-sc-auhxh6-0 eEsMrv"]');

    
    constructor () {
        super ({url: "https://www.nintendo.com/error/"})
    };

    /////////////async functions here

//     async tabSwitch(){
//         let myTabs = await this.driver.getAllWindowHandles();
//         await this.driver.switchTo().window(myTabs[1]);
//         await this.driver.sleep(1500);
//         await this.driver.close();
//         await this.driver.switchTo().window(myTabs [0]);
//     }
// }

async tabSwitch() {
    const myTabs = await this.driver.getAllWindowHandles();
    if (myTabs.length >= 2) {
        const currentTabHandle = await this.driver.getWindowHandle();
        const newTabHandle = myTabs.find(handle => handle !== currentTabHandle);

        if (newTabHandle) {
            await this.driver.switchTo().window(newTabHandle);
            await this.driver.sleep(1500);
            await this.driver.close();
            await this.driver.switchTo().window(currentTabHandle);
        } else {
            console.error("Unable to find a new tab handle.");
        }
    } else {
        console.error("Not enough window handles to switch.");
    }
}

async tabSwitch2() {
    const myTabs2 = await this.driver.getAllWindowHandles();
    if (myTabs2.length >= 2) {
        const currentTabHandle2 = await this.driver.getWindowHandle();
        const newTabHandle2 = myTabs2.find(handle => handle !== currentTabHandle2);

        if (newTabHandle2) {
            await this.driver.switchTo().window(newTabHandle2);
            await this.driver.sleep(1500);
            await this.driver.close();
            await this.driver.switchTo().window(currentTabHandle2);
        } else {
            console.error("Unable to find a new tab handle.");
        }
    } else {
        console.error("Not enough window handles to switch.");
    }
}

}