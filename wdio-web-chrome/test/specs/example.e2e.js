const LoginPage = require('../pageobjects/login.page');
const HomePage = require('../pageobjects/home.page');

describe('Login to A Roasting and Search Any Item', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.loginToAroastinglabAndCheck('hursakmantidal@gmail.com', 'asdWSX123!');
    });

    it('search any item', async () => {
        await HomePage.searchAnyItem('Kenya');
    });
});
