var StaticSiteGeneratorPlugin = require('../../../');

module.exports = {
  mode: 'development',

  entry: {
    main: __dirname + '/index.js'
  },

  output: {
    filename: 'index.js',
    path: __dirname + '/actual-output',
    publicPath: '/',
    globalObject: 'this',
    libraryTarget: 'umd'
  },

  plugins: [
    new StaticSiteGeneratorPlugin({ entry: 'THIS_DOESNT_EXIST', paths: ['/'] })
  ]

};
