const homePage = require(`../Pages/HomePage`);
const resultPage = require(`../Pages/ResultPage`);


suite("Sample Test to validate Google Search using webdriverIo", function () {
    // suiteSetup(() => {
    //   //SuiteSetup runs one time before all tests run
    // });
  
    setup(() => {
     //Setup is like Before Each -Runs before every test runs
      browser.url(`https://www.google.com`)
       assert(homePage.isLoaded(),true,`Failed to load HomePage`);
    });
  
    test(`Enter a search Keyword and validate first result `, function () {
       homePage.enterSearchKey('sampleTest');
       homePage.clickSearchButton();
       assert.include(resultPage.getResultTitles(),`Sample Test`,`Result Title text does not match`);
    });
    test(`Validate google logo image displayed `, function () {
        assert(homePage.isImageDisplayed(),`Image is not visible`);
     });
});