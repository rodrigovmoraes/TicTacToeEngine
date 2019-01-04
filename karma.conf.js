module.exports = function(config) {
  config.set({
    client: {
        mocha: {
          timeout : 100000 // 6 seconds - upped from 2 seconds
        }
    },
    frameworks: ['mocha', 'chai'],
    files: [
      { pattern: 'src/MinMax.js', watched: false, included: true },
      { pattern: 'src/TicTacToeStatus.js', watched: false, included: true },
      { pattern: 'src/TicTacToeEngine.js', watched: false, included: true },
      'test/**/*.js'
    ],
    reporters: ['mocha'],
    // reporter options
    mochaReporter: {
      symbols: {
        success: '+',
        info: '#',
        warning: '!',
        error: 'x'
      }
    },
    port: 9876,  // karma web server port
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    autoWatch: false,
    singleRun: false,
    // singleRun: false, // Karma captures browsers, runs the tests and exits
    concurrency: Infinity,
    captureTimeout: 210000,
    browserDisconnectTolerance: 3, //this one helps
    browserDisconnectTimeout : 210000,
    browserNoActivityTimeout : 210000,
    processKillTimeout: 2000
  })
}
