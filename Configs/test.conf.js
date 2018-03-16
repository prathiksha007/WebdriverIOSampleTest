const fs = require("fs");


exports.config = {

  baseUrl: "https://www.google.com",

  specs: [
    "./Tests/SampleTest.spec.js"
  ],
//Suites will be used if you have plenty of tests and need categorizing 
//   suites: {
//     componentTests: [
//       "./Tests/components/*.spec.js",
//     ],
//     IntegrationTests: [
//       "./Tests/Integration/*.spec.js",
//     ],
   
//   },
host: '127.0.0.1',
port: 4444,
maxInstances: 2,
capabilities: [
  {
    platform: "ANY",
    browserName: "chrome",
  }
],
services: ["selenium-standalone"],
seleniumArgs:{
  version:'3.5.0'
},
seleniumInstallArgs: {
  baseURL: 'https://selenium-release.storage.googleapis.com',
  version:'3.5.0',
  chrome: {
    // check for more recent versions of chrome driver here:
    // https://chromedriver.storage.googleapis.com/index.html
    version: '2.31',
    arch: process.arch,
    baseURL: 'https://chromedriver.storage.googleapis.com'
  }
},

  mochaOpts: {
    ui: "tdd",
    applicationCategory: "Sample",
    timeout: 10 * 60 * 1000,
  },
  logLevel: "silent",
  coloredLogs: true,
  screenshotOnReject: false,
  reporters: [
    "dot"
  ],
  reporterOptions: {
    outputDir: "./Reports",
    embedScreenshots: true,
    screenshotExtension: ".png",
  },
  waitforTimeout: 8000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  framework: "mocha",

  // Gets executed once before all workers get launched.
  onPrepare() {

    // Create Report Directory
    if (!fs.existsSync(this.reporterOptions.outputDir)) {
      fs.mkdirSync(this.reporterOptions.outputDir);
    }
    // Create Screenshot Directory
    if (!fs.existsSync(`${this.reporterOptions.outputDir}/screenshots/`)) {
      fs.mkdirSync(`${this.reporterOptions.outputDir}/screenshots/`);
    }
  },

  // Gets executed before test execution begins. At this point you can access to all global
  // variables like `browser`. It is the perfect place to define custom commands.
  before() { 
    assert = require("chai").assert;
  },

  // Function to be executed before a test (in Mocha) starts.
//   beforeTest(test) {

//   },

  afterTest(test) {
    // Capture screenprint for assertion errors. Verify errors capture their own screenprint.
    if (test.passed === false) {
      let screenshotName = `${this.reporterOptions.outputDir}/screenshots/${browser.desiredCapabilities.browserName}${test.title}.png`;
      if(fs.existsSync(screenshotName)){
        screenshotName = `${this.reporterOptions.outputDir}/screenshots/${browser.desiredCapabilities.browserName}${test.title}2.png`;
      }
      browser.saveScreenshot(screenshotName);
 
    }

  },
};
