(function recursion(i) {
    if(i === undefined) i = 0;
    browser.driver.manage().deleteAllCookies();
    browser.driver.get("https://www.youtube.com/watch?v=EggAULk8K-8").then(function () {
        browser.driver.manage().deleteAllCookies();
    });
    browser.driver.executeScript("window.open('https://www.youtube.com/watch?v=1V7pU1IPScU')").then(function () {
        browser.driver.manage().deleteAllCookies();
    });
    browser.driver.executeScript("window.open('https://www.youtube.com/watch?v=N9ZFy7pCRGw')").then(function () {
        browser.driver.manage().deleteAllCookies();
    });
    browser.driver.executeScript("window.open('https://www.youtube.com/watch?v=DJGyyp2uxAk')").then(function () {
        browser.driver.manage().deleteAllCookies();
    });
    browser.driver.executeScript("window.open('https://www.youtube.com/watch?v=8V3AZoxkyiw')").then(function () {
        browser.driver.manage().deleteAllCookies();
    });
    browser.driver.executeScript("window.open('https://www.youtube.com/watch?v=QkRIGcoOEzM')").then(function () {
        browser.driver.manage().deleteAllCookies();
    });
    browser.driver.executeScript("window.open('https://www.youtube.com/watch?v=F3tbEhSwkJQ')").then(function () {
        browser.driver.manage().deleteAllCookies();
    });

    console.log('iteracija ' + i);
    browser.driver.sleep(400000);
    if (i == 50) return;
    recursion(++i);
})();
/*
(function(){
    describe('',()=>{
        it('should open nba',()=>{
            browser.get('http://www.nba.com/');
            browser.sleep(5000);
            browser.close();
        })
    });
})(); 

*/
