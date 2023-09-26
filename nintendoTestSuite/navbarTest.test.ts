import { nintendoWeb } from "./navbarPageObject";
const nintendo = new nintendoWeb();

describe("Testing all functions of the Navbar", () => {

    test ('Open page and click home button', async () => {
            
            await nintendo.navigate();
            await nintendo.driver.manage().window().maximize();
            await nintendo.driver.findElement(nintendo.homeBtn);
            await nintendo.click(nintendo.homeBtn);
            await nintendo.driver.findElement(nintendo.searchBar);
            await nintendo.click(nintendo.searchBar);
            await nintendo.driver.findElement(nintendo.searchClose);
            await nintendo.click(nintendo.searchClose);
            await nintendo.driver.findElement(nintendo.searchDrop);
            await nintendo.click(nintendo.searchDrop);
            await nintendo.driver.findElement(nintendo.supportBtn);
            await nintendo.click(nintendo.supportBtn);
            await nintendo.tabSwitch();
            await nintendo.driver.findElement(nintendo.wishBtn);
            await nintendo.click(nintendo.wishBtn);
            await nintendo.driver.sleep(1500);
            await nintendo.tabSwitch2();
            await nintendo.driver.findElement(nintendo.cartBtn);
            await nintendo.click(nintendo.cartBtn);
            await nintendo.driver.findElement(nintendo.loginBtn);
            await nintendo.click(nintendo.loginBtn);
            await nintendo.driver.findElement(nintendo.loginClose);
            await nintendo.click(nintendo.loginClose);
            await nintendo.driver.findElement(nintendo.storeDrop);
            await nintendo.click(nintendo.storeDrop);
            await nintendo.driver.sleep(1500);
            await nintendo.click(nintendo.closeDrop);
            await nintendo.driver.findElement(nintendo.gamesDrop);
            await nintendo.click(nintendo.gamesDrop);
            await nintendo.driver.sleep(1500);
            await nintendo.click(nintendo.closeDrop2);
            await nintendo.driver.findElement(nintendo.switchDrop);
            await nintendo.click(nintendo.switchDrop);
            await nintendo.driver.sleep(1500);
            await nintendo.click(nintendo.closeDrop2);
            await nintendo.driver.findElement(nintendo.newsDrop);
            await nintendo.click(nintendo.newsDrop);
            await nintendo.driver.findElement(nintendo.playDrop);
            await nintendo.click(nintendo.playDrop);
            await nintendo.driver.sleep(1500);
            await nintendo.click(nintendo.closeDrop2);
  

    });
});