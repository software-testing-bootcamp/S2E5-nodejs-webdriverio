# Test Automation with WebdriverIO + Node.js

In this video, we will do 2 Test automation examples with NodeJS based WebdriverIO test framework:

 * Web browser automation (Chrome) with WebdriverIO
 * Android Mobile Automation with WebdriverIO and Appium

![image](https://user-images.githubusercontent.com/89974862/169085283-1797e7a1-22af-486a-9932-39c33a43d270.png)

**Youtube Webinar Video** https://www.youtube.com/watch?v=AhIVAmg-yws

***********

**Requirements:**

- Visual Studio Code IDE
- NodeJS Installation
- WebdriverIO Installation via Terminal or Command Line
  - npm install --save-dev @wdio/cli

**Web browser automation (Chrome) with WebdriverIO**
- Open Terminal or CMD window
- Execute this command on terminal "npm show chromedriver version" and learn the latest version of the npm package.
- Update your Chrome browser to the latest version
- Open **wdio-web-chrome** project with VS Code. Open "wdio-web-chrome/package.json" file and update the chromedriver version number if you need with returning value from this command "npm show chromedriver version".
- Navigate to the project folder and execute this command on terminal "npm install"
- Run the tests with this command "npm run wdio"


**Android Mobile Automation with WebdriverIO and Appium**
- Open Terminal or CMD window
- Start Appium server with this command "appium &"
- Open **wdio-appium-android-allure** project with VS Code. Open "wdio-appium-android-allure/wdio.conf.js" file. Edit deviceName and UDID values with your connected Android device or Android emulator
- Install Facebook and login to your account on your device or simulator
- Open a new terminal window, Navigate to the project folder and Run the tests with this command "npm run wdio". The automation code will be executed for your installed Facebook app on your device.
- Execute this command "allure open" on the terminal after test has been finished. That will automatically open a browser windows to show the test results.

**Resources:**
- https://code.visualstudio.com/
- https://nodejs.org/en/download/
- https://webdriver.io/
- https://docs.qameta.io/allure/#_mocha
- https://appium.io/
