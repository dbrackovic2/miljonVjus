exports.config = {
    directConnect: true,
    seleniumAddress : "http://localhost:4444/wd/hub",
    multiCapabilities:[{
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances:5,
        specs:[
        'run.js'
        ]
    }]
};