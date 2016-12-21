for(i=0; i<100; i++){
    browser.driver.manage().deleteAllCookies();
    browser.driver.get("https://www.youtube.com/watch?v=DJGyyp2uxAk");
    console.log('iteracija ' + i);
    browser.driver.sleep(400000);
}
