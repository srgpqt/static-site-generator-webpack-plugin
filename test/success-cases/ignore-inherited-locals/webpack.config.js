var StaticSiteGeneratorPlugin = require('../../../');
var ejs = require('ejs');
var fs = require('fs');

var template = ejs.compile(fs.readFileSync(__dirname + '/template.ejs', 'utf-8'))

var localsProto = { DONT_INCLUDE_ME: true };
var locals = Object.create(localsProto);
locals.template = template;

module.exports = {
  mode: 'development',

  entry: __dirname + '/index.js',

  output: {
    filename: 'index.js',
    path: __dirname + '/actual-output',
    publicPath: '/',
    globalObject: 'this',
    libraryTarget: 'umd'
  },

  plugins: [
    new StaticSiteGeneratorPlugin({
      locals: locals
    })
  ]
};
