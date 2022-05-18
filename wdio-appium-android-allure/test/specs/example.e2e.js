const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const RoomPage = require('../pageobjects/room.page');

describe('My application', () => {

    before(function(){
        console.log("BEFORE ALL TEST CASES")
    })
    after(function(){
        console.log("AFTER ALL TEST CASES")
    })
    beforeEach(function(){
        console.log("BEFORE EACH ALL TEST CASES")
    })
    afterEach(function(){
        console.log("AFTER EACH ALL TEST CASES")
    })

   /*  it('should login with valid credentials', async () => {
       // await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    }); */


    it('should create a room', async () => {
        await RoomPage.createRoom();
     });



});


