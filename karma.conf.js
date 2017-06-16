var path = require('path');
var webpackConfig = require('./webpack.test');
webpackConfig.module.postLoaders = [{
    test: /\.ts$/,
    include: [path.resolve(__dirname, "./src")],
    loader: 'sourcemap-istanbul-instrumenter-loader?force-sourcemap=true',
    exclude: [/\.spec\.ts$/]
}];

// var commonsChunkPluginIndex = webpackConfig.plugins.findIndex(plugin => plugin.chunkNames);
// webpackConfig.plugins.splice(commonsChunkPluginIndex, 1);

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: 'test/main.js', watched: false }
    ],
    exclude: [
    ],
    preprocessors: {
      'test/main.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    reporters: ['progress','karma-remap-istanbul'],
    remapIstanbulReporter: {
    reports: {
        html: 'App/test/coverage'
      }
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}