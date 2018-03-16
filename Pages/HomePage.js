const pageLocator = `#sbtc`;
const searchBarLocator = `#lst-ib`;
const searchButtonLocator =  `input[type='submit']`;
const logo = `#hplogo`
const HomePage = {
    isLoaded: () => {
        browser.waitForVisible(pageLocator)
        return browser.isVisible(pageLocator);
    },
    enterSearchKey: (key) => {
      browser.setValue(searchBarLocator,key);

    },
    clickSearchButton: () =>{
        browser.click(searchButtonLocator);
    },
    isImageDisplayed: () =>{
        browser.waitForVisible(logo);
        return browser.isVisible(logo);
    }
}
    module.exports = HomePage;