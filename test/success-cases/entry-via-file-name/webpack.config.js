var StaticSiteGeneratorPlugin = require('../../../');
var StatsWriterPlugin = require("webpack-stats-plugin").StatsWriterPlugin;
var ejs = require('ejs');
var fs = require('fs');

var template = ejs.compile(fs.readFileSync(__dirname + '/template.ejs', 'utf-8'))

var paths = [
  '/',
  '/foo',
  '/foo/bar'
];

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
    new StaticSiteGeneratorPlugin({
      entry: 'index.js',
      paths: paths,
      locals: {
        template: template
      }
    }),
    new StatsWriterPlugin() // Causes the asset's `size` method to be called
  ]
};
