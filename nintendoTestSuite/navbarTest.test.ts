import { nintendoWeb } from "./navbarPageObject";
const nintendo = new nintendoWeb();
const fs = require('fs');

describe("Testing all functions of the Navbar", () => {
    beforeAll(() => {
        nintendo.openPage();
    });
    afterAll(() => {
        nintendo.driver.quit();
    })
    test ('Click Homepage', async () =>{
        nintendo.homeButtonClick
         //maximize window
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
         await nintendo.driver.sleep(1500);

         await nintendo.driver.findElement(nintendo.wishBtn);
         await nintendo.click(nintendo.wishBtn);

         await nintendo.driver.findElement(nintendo.cartBtn);
         await nintendo.click(nintendo.cartBtn);
         await nintendo.driver.sleep(1500);
         await nintendo.tabSwitch2();

         await nintendo.driver.findElement(nintendo.loginBtn);
         await nintendo.click(nintendo.loginBtn);

         await nintendo.driver.findElement(nintendo.loginClose);
         await nintendo.click(nintendo.loginClose);

         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop);
         // await nintendo.driver.sleep(1500);
         await nintendo.click(nintendo.closeDrop);

         await nintendo.driver.findElement(nintendo.gamesDrop);
         await nintendo.click(nintendo.gamesDrop);
         // await nintendo.driver.sleep(1500);
         await nintendo.click(nintendo.closeDrop2);

         await nintendo.driver.findElement(nintendo.switchDrop);
         await nintendo.click(nintendo.switchDrop);
         // await nintendo.driver.sleep(1500);
         await nintendo.click(nintendo.closeDrop2);

         await nintendo.driver.findElement(nintendo.newsDrop);
         await nintendo.click(nintendo.newsDrop);

         await nintendo.driver.findElement(nintendo.playDrop);
         await nintendo.click(nintendo.playDrop);
         // await nintendo.driver.sleep(1500);
         await nintendo.click(nintendo.closeDrop2);

         //My Nintendo Store Sub Menu

                     //Store games

         await nintendo.navigate();
         await nintendo.driver.sleep(500);
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop);
         await nintendo.driver.findElement(nintendo.subGames);
         await nintendo.click(nintendo.subGames);

                     //Store Hardware

         await nintendo.navigate();
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop);
         await nintendo.driver.findElement(nintendo.subHard);
         await nintendo.click(nintendo.subHard);

                     //Store Merch

         await nintendo.navigate();
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop);
         await nintendo.driver.findElement(nintendo.subMerch);
         await nintendo.click(nintendo.subMerch);

                     //Store Exclusives
         await nintendo.navigate();
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop);
         await nintendo.driver.findElement(nintendo.subExclusives);
         await nintendo.click(nintendo.subExclusives);

                     //Store Characters
         await nintendo.navigate();
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop)
         await nintendo.driver.findElement(nintendo.subCharacters);
         await nintendo.click(nintendo.subCharacters);

                     //Store Sales and Deals

         await nintendo.navigate();
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop)
         await nintendo.driver.findElement(nintendo.subDeals);
         await nintendo.click(nintendo.subDeals);

//Store Sub Links (18)


         await nintendo.navigate();
         await nintendo.driver.sleep(500);
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop)
         await nintendo.driver.findElement(nintendo.storeLink1);
         await nintendo.click(nintendo.storeLink1);

         await nintendo.navigate();
         await nintendo.driver.sleep(500);
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop)
         await nintendo.driver.findElement(nintendo.storeLink2);
         await nintendo.click(nintendo.storeLink2);

         await nintendo.navigate();
         await nintendo.driver.sleep(500);
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop)
         await nintendo.driver.findElement(nintendo.storeLink3);
         await nintendo.click(nintendo.storeLink3);

         await nintendo.navigate();
         await nintendo.driver.sleep(500);
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop)
         await nintendo.driver.findElement(nintendo.storeLink4);
         await nintendo.click(nintendo.storeLink4);

         await nintendo.navigate();
         await nintendo.driver.sleep(500);
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop)
         await nintendo.driver.findElement(nintendo.storeLink5);
         await nintendo.click(nintendo.storeLink5);

         await nintendo.navigate();
         await nintendo.driver.sleep(500);
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop)
         await nintendo.driver.findElement(nintendo.storeLink6);
         await nintendo.click(nintendo.storeLink6);

         await nintendo.navigate();
         await nintendo.driver.sleep(500);
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop)
         await nintendo.driver.findElement(nintendo.storeLink7);
         await nintendo.click(nintendo.storeLink7);

         await nintendo.navigate();
         await nintendo.driver.sleep(500);
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop)
         await nintendo.driver.findElement(nintendo.storeLink8);
         await nintendo.click(nintendo.storeLink8);

         await nintendo.navigate();
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop)
         await nintendo.driver.findElement(nintendo.storeLink9);
         await nintendo.click(nintendo.storeLink9);

         await nintendo.navigate();
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop)
         await nintendo.driver.findElement(nintendo.storeLink10);
         await nintendo.click(nintendo.storeLink10);

         await nintendo.navigate();
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop)
         await nintendo.driver.findElement(nintendo.storeLink11);
         await nintendo.click(nintendo.storeLink11);

         await nintendo.navigate();
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop)
         await nintendo.driver.findElement(nintendo.storeLink12);
         await nintendo.click(nintendo.storeLink12);

         await nintendo.navigate();
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop)
         await nintendo.driver.findElement(nintendo.storeLink13);
         await nintendo.click(nintendo.storeLink13);

         await nintendo.navigate();
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop)
         await nintendo.driver.findElement(nintendo.storeLink14);
         await nintendo.click(nintendo.storeLink13);

         await nintendo.navigate();
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop)
         await nintendo.driver.findElement(nintendo.storeLink14);
         await nintendo.click(nintendo.storeLink12);

         await nintendo.navigate();
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop)
         await nintendo.driver.findElement(nintendo.storeLink15);
         await nintendo.click(nintendo.storeLink15);

         await nintendo.navigate();
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop)
         await nintendo.driver.findElement(nintendo.storeLink16);
         await nintendo.click(nintendo.storeLink16);

         await nintendo.navigate();
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop)
         await nintendo.driver.findElement(nintendo.storeLink17);
         await nintendo.click(nintendo.storeLink17);

         await nintendo.navigate();
         await nintendo.driver.findElement(nintendo.storeDrop);
         await nintendo.click(nintendo.storeDrop)
         await nintendo.driver.findElement(nintendo.storeLink18);
         await nintendo.click(nintendo.storeLink18);

 });
    })

    


           
    
