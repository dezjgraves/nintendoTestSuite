import { By } from 'selenium-webdriver';
import { BasePage } from './basePage';

export class NintendoWeb extends BasePage {
  constructor() {
    super({ url: 'https://www.nintendo.com/store/merchandise/plush//' });
  }

  // Main Page
  itemContainer: By = By.xpath('(//div[@class="constrained-sc-1d4m5hk-0 cTFArn"])[2]');
  // itemCard
  itemCard: By = By.xpath('(//a[@class="BasicTilestyles__Tile-sc-1bsju6x-1 hDYTwJ"])[1]');
  itemTitle: By = By.xpath('(//h2[@class="Headingstyles__StyledH-sc-s17bth-0 vsVuC Textstyles__StyledTitle-sc-w55g5t-0 lcSxww tilestyles__Title-sc-eg7slj-2 bKKnvO"])[1]');
  itemPrice: By = By.xpath('(//div[@class="Pricestyles__PriceWrapper-sc-1f0n8u6-1 eroAfM"])[1]');
  // product page
  productTitle: By = By.xpath('//h1[@class="Headingstyles__StyledH-sc-s17bth-0 eQifGC"]');
  productPrice: By = By.xpath('(//div[@class="Pricestyles__PriceWrapper-sc-1f0n8u6-1 eroAfM"])[1]');
  minusBtn: By = By.xpath('(//button[@class="QuantitySelectorstyles__Button-sc-1q3v2xi-1 gROFpq"])[1]')
  plusBtn: By = By.xpath('(//button[@class="QuantitySelectorstyles__Button-sc-1q3v2xi-1 gROFpq"])[2]')
  productQty: By = By.xpath('//div[@class="QuantitySelectorstyles__Quantity-sc-1q3v2xi-2 gkboii"]');
  addCart: By = By.xpath('//button[@class="Buttonstyles__Button-sc-1rgmf3w-2 jDSaOH PurchaseOptionsstyles__WrappingButton-sc-10vf2cu-9 cakehc"]');
  checkoutBtn: By = By.xpath('(//a[@class="Buttonstyles__Button-sc-1rgmf3w-2 bjubZP AddedToCartstyles__Button-sc-1h53fru-9 dRtwEA"])[1]');
  // checkout page
  checkoutContainer: By = By.xpath('//div[@class="Gridstyles-sc-1msjvuf-0 hHgygh"]');
  checkoutTitle: By = By.xpath('//a[@class="CartItemstyles__Title-sc-1900osq-6 Mhnhr"]');
  checkoutQty: By = By.xpath('//div[@class="QuantitySelectorstyles__Quantity-sc-1q3v2xi-2 gkboii"]');
  checkoutCost: By = By.xpath('(//span[@class="PricingFieldstyles__Span-sc-nhpzl2-2 QPwaB"])[2]');
  removeBtn: By = By.xpath('//button[@class="Linkstyles__StyledLink-sc-1o4eb18-1 detOID CartItemstyles__RemoveItemButton-sc-1900osq-18 fqvfJe"]');

  //methods
  async openPage(){
    await this.navigate();
    await this.driver.manage().window().maximize();
}};

