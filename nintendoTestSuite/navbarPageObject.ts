import {By, until} from 'selenium-webdriver';
import {BasePage} from './basePage';

export class nintendoWeb extends BasePage {
        //Home
        homeBtn: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR"])[1]');
        //Search Bar
        searchBar: By = By.xpath('//button[@class="SearchInputstyles__Button-sc-1r59ztq-3 jYcoFG"]');
        searchInput: By = By.xpath('//input[@name="q"]');
        searchDrop: By = By.xpath('(//div[@class="SearchInputstyles__Select-sc-1r59ztq-7 bsKuBq css-b62m3t-container"])[1]');
        searchCategory: By = By.xpath('//div[@class="SearchBarSelectstyles__ControlReplacement-sc-190tvj8-5 gelFGY css-ds8zu2-control');
        searchClose: By = By.xpath('(//button[@class="SearchFlyoverstyles__Close-sc-14rqey7-6 bMRZPH"])[1]');
        searchResult: By = By.xpath('//div[@class="Layout__Main-sc-1kgevev-6 htKanS"]');
        //Top Links
        supportBtn: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR Topstyles__TopLink-sc-14wlync-2 gXUCck"])[1]');
        cartBtn: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR Topstyles__TopLink-sc-14wlync-2 gXUCck"])[3]');
        wishBtn: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR Topstyles__TopLink-sc-14wlync-2 gXUCck"])[2]');
        cartImg: By = By.xpath('//span[@class="Spacerstyles__StyledSpacer-sc-1su040v-0 dANojj"]')
        loginBtn: By = By.xpath('//button[@class="ButtonLink-sc-1empns-0 bswXBR UserButtonstyles__Button-sc-jxbhoc-0 goYvYP"]');
        loginBox: By = By.xpath('//div[@class="Menustyles__Scrolling-sc-1q588nn-1 ehqGDL"]')
        loginClose: By = By.xpath('//button[@class="CloseButtonstyles__CloseButton-sc-auhxh6-0 eEsMrv DrawerHeaderstyles__CloseButton-sc-q0gw4c-2 jPtbyp"]');

        //Dropdown Links
        storeDrop: By = By.xpath('(//button[@class="ButtonLink-sc-1empns-0 bswXBR DropdownButtonstyles__Button-sc-m78d24-0 jZacJP"]) [1]');
        storeBox: By = By.xpath('//div[@class="DropdownMenustyles__Wrap-sc-fwuyy1-1 bBUEeC"]');
        gamesDrop: By = By.xpath('(//button[@class="ButtonLink-sc-1empns-0 bswXBR DropdownButtonstyles__Button-sc-m78d24-0 jZacJP"]) [2]');
        gamesBox: By = By.id('GAMES');
        switchDrop: By = By.xpath('(//button[@class="ButtonLink-sc-1empns-0 bswXBR DropdownButtonstyles__Button-sc-m78d24-0 jZacJP"]) [3]');
        switchBox: By = By.id('NINTENDO_SWITCH');
        playDrop: By = By.xpath('(//button[@class="ButtonLink-sc-1empns-0 bswXBR DropdownButtonstyles__Button-sc-m78d24-0 jZacJP"]) [4]');
        playBox: By = By.id('PLAY_NINTENDO');
        closeDrop: By = By.xpath('//button[@class="CloseButtonstyles__CloseButton-sc-auhxh6-0 eEsMrv Awningstyles__AwningClose-sc-12iyqmw-1 fwKpOS"]');
        newsDrop: By = By.xpath('//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownButtonstyles__Button-sc-m78d24-0 jZacJP"]');
        closeDrop2: By = By.xpath('//button[@class="CloseButtonstyles__CloseButton-sc-auhxh6-0 eEsMrv"]');
        closeDrop3: By = By.xpath('//button[@class="CloseButtonstyles__CloseButton-sc-auhxh6-0 eEsMrv"]');

        //dropdown SubCategories
        subGames: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__HeadingLink-sc-fwuyy1-11 fmrMnO"])[1]');
        subHard: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__HeadingLink-sc-fwuyy1-11 fmrMnO"])[2]');
        subMerch: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__HeadingLink-sc-fwuyy1-11 fmrMnO"])[3]');
        subExclusives: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__HeadingLink-sc-fwuyy1-11 fmrMnO"])[4]');
        subCharacters: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__HeadingLink-sc-fwuyy1-11 fmrMnO"])[5]');
        subDeals: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__HeadingLink-sc-fwuyy1-11 fmrMnO"])[6]') ;   
        
        //dropdown StoreLinks
        storeLink1: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__LinkItem-sc-fwuyy1-4 bWVJoL"])[1]');
        storeLink2: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__LinkItem-sc-fwuyy1-4 bWVJoL"])[2]');
        storeLink3: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__LinkItem-sc-fwuyy1-4 bWVJoL"])[3]');
        storeLink4: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__LinkItem-sc-fwuyy1-4 bWVJoL"])[4]');
        storeLink5: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__LinkItem-sc-fwuyy1-4 bWVJoL"])[5]');
        storeLink6: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__LinkItem-sc-fwuyy1-4 bWVJoL"])[6]');
        storeLink7: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__LinkItem-sc-fwuyy1-4 bWVJoL"])[7]');
        storeLink8: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__LinkItem-sc-fwuyy1-4 bWVJoL"])[8]');
        storeLink9: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__LinkItem-sc-fwuyy1-4 bWVJoL"])[9]');
        storeLink10: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__LinkItem-sc-fwuyy1-4 bWVJoL"])[10]');
        storeLink11: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__LinkItem-sc-fwuyy1-4 bWVJoL"])[11]');
        storeLink12: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__LinkItem-sc-fwuyy1-4 bWVJoL"])[12]');
        storeLink13: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__LinkItem-sc-fwuyy1-4 bWVJoL"])[13]');
        storeLink14: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__LinkItem-sc-fwuyy1-4 bWVJoL"])[14]');
        storeLink15: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__LinkItem-sc-fwuyy1-4 bWVJoL"])[15]');
        storeLink16: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__LinkItem-sc-fwuyy1-4 bWVJoL"])[16]');
        storeLink17: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__LinkItem-sc-fwuyy1-4 bWVJoL"])[17]');
        storeLink18: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR DropdownMenustyles__LinkItem-sc-fwuyy1-4 bWVJoL"])[18]');

        //Hero Slider
        heroSlider: By = By.xpath('//div[@class="AutoplayCarouselstyles__Constrained-sc-1jblu2z-0 cOBvmf"]');
    
    constructor () {
        super ({url: "https://www.nintendo.com/switch/online/"})
    };

    /////////////Methods here

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

async openPage(){
    await this.navigate();
    await this.driver.manage().window().maximize();
}};


