var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack')

var locals = {
  paths: [
    '/'
  ]
}

module.exports = {
  entry: {
    main: './src/index.js',
    css: './scss/app.scss'
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['es2015', 'react'] }
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          '!css-loader!sass-loader'
        )
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  plugins: [
    new StaticSiteGeneratorPlugin('main', locals.paths, locals),
    new ExtractTextPlugin('style.css'),
    new webpack.NoErrorsPlugin()    
  ],
  watch: true
};
