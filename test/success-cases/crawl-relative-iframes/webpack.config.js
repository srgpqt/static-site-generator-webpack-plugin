var StaticSiteGeneratorPlugin = require('../../../');
var ejs = require('ejs');
var fs = require('fs');

var templateSource = fs.readFileSync(__dirname + '/template.ejs', 'utf-8');
var template = ejs.compile(templateSource);

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
      crawl: true,
      locals: {
        template: template
      }
    })
  ]
};
