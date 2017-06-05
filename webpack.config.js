const path = require('path');
const resolve = path.resolve;
const webpack = require('webpack');

module.exports = {
  entry: './app',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      { test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      { test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.png$/,
        use: { loader: 'url-loader', options: { limit: 100000 } },
      },
      {
        test: /\.jpg$/,
        use: [ 'file-loader' ]
      }
    ]
  },
  devServer: {
    contentBase: './build',
    inline: true
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css', '.scss']
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  }
}
