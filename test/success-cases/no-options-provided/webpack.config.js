var StaticSiteGeneratorPlugin = require('../../../');
var StatsWriterPlugin = require("webpack-stats-plugin").StatsWriterPlugin;

module.exports = {
  mode: 'development',

  entry: __dirname + '/index.js',

  output: {
    filename: 'index.js',
    path: __dirname + '/actual-output',
    globalObject: 'this',
    libraryTarget: 'umd'
  },

  plugins: [
    new StaticSiteGeneratorPlugin(),
    new StatsWriterPlugin() // Causes the asset's `size` method to be called
  ]
};
