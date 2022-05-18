

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get cookieMessage(){
        return $('#spnCerez')
    }

    get closeCookieMessageButton(){
        return $('//*[@id="cerekKullanimUyari"]/span/i')
    }

    get inputUsername () {
        return $('#txtUyeGirisEmail');
    }

    get inputPassword () {
        return $('#txtUyeGirisPassword');
    }

    get btnSubmit () {
        return $('//button[@type="button" and @class="userLoginBtn button"]');
    }

    get labelWelcome(){
        return $('(//span[@class="ng-binding"])[1]')
    }

    get myAccountIcon(){
        return $('//a[@class="headerHesabim"]');
    }

    get usernameLabel(){
        return $('//div[@class="useName"]');
    }

    get kahveSetleriLinkText(){
        return $('(//a[@title="Kahve Setleri"])[2]');
    }

    get filtreKahveCheckbox(){
        return $('//*[@id="divLeftBlock"]/div/div[2]/div[2]/div[2]/ul/li[1]/a');
    }

    get urunSayisiLabel(){
        return $('//*[@id="divSayfalamaUst"]/div[2]/ul[2]/li[6]/span');
    }

    get afterFilterIlkUrun(){
        return $('(//img[@class="resimOrginal lazyImage entered loaded"])[1]');
    }

    get urunNameLabel(){
        return $('//div[@class="ProductName"]');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
     async CloseCookieMessage () {
        await expect(this.cookieMessage).toBeExisting();
        await this.closeCookieMessageButton.click();
    }

    async MaximizeWindow()
    {
        browser.maximizeWindow();
    }

    async EnterUserName(username)
    {
        //await this.inputUsername.waitForExist({ timeout: 5000 });
        await expect(this.inputUsername).toBeExisting();
        await this.inputUsername.setValue(username);
    }

    async EnterPassword(password)
    {
        //await this.inputPassword.waitForExist({ timeout: 5000 });
        await expect(this.inputPassword).toBeExisting();
        await this.inputPassword.setValue(password);
    }

    async ClickLoginButton()
    {
        //await this.btnLoginDeel.waitForExist({ timeout: 5000 });
        await expect(this.btnSubmit).toBeExisting();
        await this.btnSubmit.click();
    }

    async WelcomeLabelCheck()
    {
        await this.labelWelcome.waitForExist({ timeout: 5000 });
        await expect(this.labelWelcome).toBeExisting();
        await expect(this.labelWelcome).toHaveTextContaining(
            'HOŞGELDİNİZ');
    }

    async UsernameCheck(username)
    {
        await this.myAccountIcon.moveTo();
        await this.usernameLabel.waitForExist({ timeout: 5000 });
        await expect(this.usernameLabel).toBeExisting();
        await expect(this.usernameLabel).toHaveTextContaining(
            username);
    }

    async LoginCheck()
    {
        await this.WelcomeLabelCheck();
        await this.UsernameCheck('Hür Ibrahim Sakman');
    }

    async ClickKahveSetleri()
    {
        await this.kahveSetleriLinkText.waitForExist({ timeout: 5000 });
        await this.kahveSetleriLinkText.click();
    }

    async SelectFiltreKahve()
    {
        await this.filtreKahveCheckbox.waitForExist({ timeout: 5000 });
        await this.filtreKahveCheckbox.click();
    }

    async PrintUrunSayisi()
    {
        await this.urunSayisiLabel.waitForExist({ timeout: 5000 });
        console.log(await this.urunSayisiLabel.getText());
    }

    async ClickFirstItemAfterFilter()
    {
        await this.afterFilterIlkUrun.waitForExist({ timeout: 5000 });
        await this.afterFilterIlkUrun.click();
    }

    async PrintSelectedItemName()
    {
        await this.urunNameLabel.waitForExist({ timeout: 5000 });
        console.log(await this.urunNameLabel.getText());
    }

    async testWithEverybody()
    {
        await this.ClickKahveSetleri();
        await this.SelectFiltreKahve();
        await this.PrintUrunSayisi();
        await this.ClickFirstItemAfterFilter();
        await this.PrintSelectedItemName();
    }

    async loginToAroastinglabAndCheck (username, password) {
        await this.MaximizeWindow();
        await this.CloseCookieMessage();
        await this.EnterUserName(username);
        await this.EnterPassword(password);
        await this.ClickLoginButton();
        await this.LoginCheck();
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }


    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('UyeGiris');
    }
}

module.exports = new LoginPage();
