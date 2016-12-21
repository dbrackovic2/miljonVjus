for(i=0; i<100; i++){
    browser.driver.manage().deleteAllCookies();
    browser.driver.get("https://www.youtube.com/watch?v=DJGyyp2uxAk");
    browser.driver.window.open('https://www.youtube.com/watch?v=1V7pU1IPScU');
    browser.driver.window.open('https://www.youtube.com/watch?v=N9ZFy7pCRGw');
    browser.driver.window.open('https://www.youtube.com/watch?v=EggAULk8K-8');
    console.log('iteracija ' + i);
    browser.driver.sleep(400000);
}
