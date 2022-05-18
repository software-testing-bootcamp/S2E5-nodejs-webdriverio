const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */

     get searchIcon(){
        return $('(//i[@class="fa fa-search"])[2]');
    }

    get searchTextbox(){
        return $('#txtbxArama');
    }

    get searchButton(){
        return $('#btnKelimeAra');
    }

    get firstItem(){
        return $('(//a[@class="detailLink detailUrl"])[1]');
    }

    get productNameLabel(){
        return $('//div[@class="ProductName"]');
    }

    get noProductLabel(){
        return $('//div[@id="divUrunYok"]');
    }

    // Page Spesific Methods

    async searchAnyItem(itemName){
        await this.ClickSearchIcon();
        await this.EnterItemNameToSearchTextbox(itemName);
        await this.ClickSearchButton();
        await this.SelectFirstItem();
        await this.GetFirstProductName();
    }

    async ClickSearchIcon(){
        await expect(this.searchIcon).toBeExisting();
        await this.searchIcon.click();
    }

    async EnterItemNameToSearchTextbox(itemName){
        await expect(this.searchTextbox).toBeExisting();
        await this.searchTextbox.setValue(itemName);
    }

    async ClickSearchButton(){
        await expect(this.searchButton).toBeExisting();
        await this.searchButton.click();
    }

    async SelectFirstItem(){
        await expect(this.firstItem).toBeExisting();
        await this.firstItem.click();
    }

    async GetFirstProductName(){
        await expect(this.productNameLabel).toBeExisting();
        console.log(await this.productNameLabel.getText());
    }
}

module.exports = new HomePage();
