

const Page = require('./page');
var expect = require('chai').expect

class RoomPage extends Page {

    get elReelsTab () {
        return $('~Reels Sekmesi');
    }

    get elOdalarTab () {
        return $('~Odalar Sekmesi');
    }

    get elOdaOlustur () {
        return $('~Oda oluştur');
    }

    get elOdaIsim () {
        return $('//android.view.ViewGroup[@content-desc="Başlık"]/android.widget.EditText');
    }

    async createRoom () {
                await this.elReelsTab.waitForDisplayed(20000)
                await this.elReelsTab.click();
                await this.elOdalarTab.click();
                await this.elOdaOlustur.click();
                await this.elOdaIsim.setValue("test 123");
                const status = await this.elOdaIsim.getText()
                expect(status).to.equal("test 1234")
    }

}

module.exports = new RoomPage();
