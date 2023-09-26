import {By} from 'selenium-webdriver';
import {BasePage} from './basePage';

export class nintendoWeb extends BasePage {
    
    homeBtn: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR"])[1]');
    searchBar: By = By.xpath('//button[@class="SearchInputstyles__Button-sc-1r59ztq-3 jYcoFG"]');
    searchDrop: By = By.xpath('(//div[@class="SearchInputstyles__Select-sc-1r59ztq-7 bsKuBq css-b62m3t-container"])[1]');
    searchClose: By = By.xpath('(//button[@class="SearchFlyoverstyles__Close-sc-14rqey7-6 bMRZPH"])[1]')
    constructor () {
        super ({url: "https://www.nintendo.com/error/"})
    };

    /////////////async functions here

    async tabSwitch(){
        let myTabs = await this.driver.getAllWindowHandles();
        await this.driver.switchTo().window(myTabs[1]);
        await this.driver.sleep(1500);
        await this.driver.close();
        await this.driver.switchTo().window(myTabs [0]);
    }
}