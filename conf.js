var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
/**
 * Reference configuration file: https://github.com/angular/protractor/blob/master/docs/referenceConf.js
 */
exports.config = {
    /**
     * How to connect to Browser Drivers
     * If no seleniumAddress is defined protractor will run locally
     */
    seleniumAddress: 'http://localhost:4444/wd/hub',

    /**
     * What tests to run
     */
    suites: {
        // Execute spec
        javascriptBasis: './tests/javascriptBasis/javascriptBasis.spec.js'

        // Execute all specs in 1 folder
        // exercise01: './tests/register/**spec.js'

    },
    /**
     * How to set up browsers
     */
    // directConnect: true,
    capabilities: {
        browserName: 'chrome'
        // browserName: 'firefox'
        // browserName: 'internet explorer'
    },

    //multiCapabilities: [{
    //    browserName: 'chrome',
    //    maxInstances: 10
    //}, {
    //    browserName: 'firefox',
    //    maxInstances: 10
    //}],

    /**
     * Global test information
     */
    baseUrl: 'https://www.fetch.co.uk',

    onPrepare: function() {

        /**
         * Determine if the page has Angular or not
         * @param  {boolean}  flag Flag to set ignoreSynchronization
         */
        global.isAngular = function(flag) {
            browser.ignoreSynchronization = !flag;
        };

        // Maximize the browser window
        browser.driver.manage().window().maximize();

        /**
         * Create reports
        */
        var date = new Date();

        date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getUTCDate() + '-' + date.getHours() + '_' + (date.getMinutes() + 1);

        jasmine.getEnv().addReporter(
        new HtmlScreenshotReporter({
                dest: 'reports/' + date,
                filename: 'test-report.html',
                reportOnlyFailedSpecs: false,
                captureOnlyFailedSpecs: true
            })
         );
    },

    /**
     * The test framework
     */
    framework: 'jasmine2',

    jasmineNodeOpts: {
        showcolors: true,
        defaultTimeoutInterval: 90000
    }
};
