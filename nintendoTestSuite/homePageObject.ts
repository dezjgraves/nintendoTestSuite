import {By, until} from 'selenium-webdriver';
import {BasePage} from './basePage';
export class nintendoWeb extends BasePage {
    homeBtn: By = By.xpath('(//a[@class="ButtonLink-sc-1empns-0 bswXBR"])[1]');
    breadCrumb: By = By.xpath('//ol[@class="Breadcrumbsstyles__StyledOl-sc-sjz6t7-1 izlbaI"]');
    mainHome: By = By.id('main');

    //page hero
    heroCarousel: By = By.xpath('//div[@class="AutoplayCarouselstyles__Constrained-sc-1jblu2z-0 cOBvmf"]');     
    heroBack: By = By.xpath('(//button[@class="Buttonstyles__Button-sc-1rgmf3w-2 lhgPCM AutoplayCarouselstyles__SlideButton-sc-1jblu2z-6 kHylNd"])[1]');
    heroPlay: By = By.xpath('(//button[@class="Buttonstyles__Button-sc-1rgmf3w-2 lhgPCM AutoplayCarouselstyles__SlideButton-sc-1jblu2z-6 kHylNd"])[2]');
    heroNext: By = By.xpath('(//button[@class="Buttonstyles__Button-sc-1rgmf3w-2 lhgPCM AutoplayCarouselstyles__SlideButton-sc-1jblu2z-6 kHylNd"])[3]');
    
    //featured
    featureCard: By = By.xpath('(//a[@class="BasicTilestyles__Tile-sc-1bsju6x-1 ivzeJc"])[1]')
    featureCard2: By = By.xpath('(//a[@class="BasicTilestyles__Tile-sc-1bsju6x-1 ivzeJc"])[2]')

    platformLabel: By = By.xpath('(//div[@class="PlatformLabelstyles__Platform-sc-v8r1lj-1 kqQWxR"])[1]');
    featureTitle: By = By.xpath('(//h3[@class="Headingstyles__StyledH-sc-s17bth-0 vsVuC Textstyles__StyledTitle-sc-w55g5t-0 lcSxww tilestyles__Title-sc-eg7slj-2 bKKnvO"])[1]');
    featureTitle2: By = By.xpath('(//h3[@class="Headingstyles__StyledH-sc-s17bth-0 vsVuC Textstyles__StyledTitle-sc-w55g5t-0 lcSxww tilestyles__Title-sc-eg7slj-2 bKKnvO"])[2]');
    //product page stuff
    heroInfo: By = By.xpath('//div[@class="Herostyles__HeroInfo-sc-1i9d4nw-9 fikBsf"]');

    //news
    articleCard: By = By.xpath('(//a[@class="BasicTilestyles__Tile-sc-1bsju6x-1 gcuZTC NewsTilestyles__Tile-sc-1h6e8cs-2 KixqZ"])[1]');
    articleDate: By = By.xpath('(//p[@class="NewsTilestyles__Date-sc-1h6e8cs-3 jayxay"])[1]');
    articleHeading: By = By.xpath('(//h3[@class="Headingstyles__StyledH-sc-s17bth-0 vsVuC Textstyles__StyledTitle-sc-w55g5t-0 lcSxww tilestyles__Title-sc-eg7slj-2 bzxrZf"])[1]');
    articleAll: By = By.xpath('(//a[@class="Buttonstyles__Button-sc-1rgmf3w-2 jSNQpX"])[12]');
    
    //newspagestuff
    newsFilter: By = By.xpath('//div[@class="indexstyles__PageFilters-sc-1kkjjsh-2 csfeMN"]');
    
    //article page stuff
    articleMain: By = By.xpath('//div[@class="Articlestyles__InnerWrapper-sc-jqr39t-4 cfKYQj"]');
    
    //recently viewed
    recentItems: By = By.xpath('(//div[@class="ProductCollectionsstyles__CollectionWrap-sc-pri5d8-1 MCbQT"])[6]')
    constructor () {
        super ({url: "https://www.nintendo.com/"})
    };

    async openPage(){
        await this.navigate();
        await this.driver.manage().window().maximize();
    }};