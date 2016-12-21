exports.config = {
    directConnect: true,
    seleniumAddress : "http://localhost:4444/wd/hub",
    multiCapabilities:[{
        browserName: 'firefox',
        version: '45',
        shardTestFiles: true,
        maxInstances: 5,
        specs: [
        'run.js']
    },{
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances:5,
        specs:[
        'run.js'
        ]
    }]
};