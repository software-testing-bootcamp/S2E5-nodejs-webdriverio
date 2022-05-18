# deel_challenge

# WDIO Installation

- Install node v14.15.3
- install npm 6.14.9 or higher
- npm install @wdio/cli
- npx wdio config
	- Select "On my local machine"
	- Select mocha framework
	- Select sync Webdriver IO commands
	- Select "No" for the compiler question
	- Where are you test specs located? - Press Enter
	- Select "Yes" for the autogenerate test files question
	- Select "Yes" for the to use page objects question
	- Select "Yes" for the to use page objects located question
	- Select allure for reporting
	- Select chromedriver
	- Enter your base url

# Allure reporting installation

- npm install @wdio/allure-reporter --save-dev
- npm install -g allure-commandline --save-dev

# Generate Allure Report

- After execute the test script run the code line below
	- allure generate allure-results/ && allure open