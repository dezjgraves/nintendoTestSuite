import { nintendoWeb } from "./navbarPageObject";
const nintendo = new nintendoWeb();

describe("Testing all functions of the Navbar", () => {

    test ('Open page and click home button', async () => {
            
            await nintendo.navigate();
            await nintendo.driver.manage().window().maximize();
            await nintendo.driver.findElement(nintendo.homeBtn);
            await nintendo.click(nintendo.homeBtn);
            await nintendo.click(nintendo.searchBar);
            await nintendo.click(nintendo.searchClose);
            await nintendo.driver.findElement(nintendo.searchDrop);
            await nintendo.click(nintendo.searchDrop);
    });
});