const resultLocator = `div.bkWMgd h3.r>a`;
const searchButtonLocator =  `input[type='submit']`;
const ResultPage = {
    getResultTitles: () => {
        let elems = browser.elements(resultLocator);
        let result = browser.getText(elems.value[0].selector);
        return result[0];
    }
}

    module.exports = ResultPage;




