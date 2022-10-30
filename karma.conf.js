const customLaunchers = {
  bs_opera_old: {
    base: 'BrowserStack',
    "os": "Windows",
    "os_version": "XP",
    "browser": "opera",
    "browser_version": "12.15",
  },
  bs_chrome_old: {
    base: 'BrowserStack',
    "os": "Windows",
    "os_version": "XP",
    "browser": "chrome",
    "browser_version": "16.0",
  },
  bs_ie11: {
    base: 'BrowserStack',
    "os": "Windows",
    "os_version": "7",
    "browser": "ie",
    "browser_version": "11.0",
  },
  bs_chrome_latest: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '11',
    browser: 'chrome',
    browser_version: 'latest',
  },
  bs_edge_latest: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '11',
    browser: 'edge',
    browser_version: 'latest',
  },
  bs_firefox_latest: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '11',
    browser: 'firefox',
    browser_version: 'latest',
  },
  bs_safari_old: {
    base: 'BrowserStack',
    browser: 'safari',
    browser_version: '5.1',
    os: 'OS X',
    os_version: 'Snow Leopard'
  },
  bs_safari_latest: {
    base: 'BrowserStack',
    browser: 'safari',
    browser_version: 'latest',
    os: 'OS X',
    os_version: 'Monterey',
  },
  bs_iphone7: {
    base: 'BrowserStack',
    device: 'iPhone 7',
    os: 'ios',
    os_version: '10'
  },
  bs_android_browser: {
    base: 'BrowserStack',
    "os": "android",
    "os_version": "12.0",
    "browser": "android",
    "device": "Samsung Galaxy S22 Plus",
    "browser_version": null,
    "real_mobile": true
  },
}

module.exports = function(config) {
  config.set({
    customLaunchers,
    browsers: Object.keys(customLaunchers),
    browserStack: {
      retryLimit: 1,
      video: false,
    },

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://www.npmjs.com/search?q=keywords:karma-adapter
    frameworks: ['browserify', 'mocha'],

    // list of files / patterns to load in the browser
    files: [
      'test/**/*.js',
    ],

    preprocessors: {
      'test/**/*.js': [ 'browserify' ]
    },

    browserify: {
      debug: true,
      // transform: [ 'brfs' ]
    },

    // list of files / patterns to exclude
    exclude: [
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://www.npmjs.com/search?q=keywords:karma-reporter
    reporters: ['progress', 'BrowserStack'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser instances should be started simultaneously
    concurrency: 5
  })
}
