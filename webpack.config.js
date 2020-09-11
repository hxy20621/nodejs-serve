const path = require('path');
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  target: 'async-node',
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
      },
      {
        test: /\.(ts)/,
        use: 'ts-loader',
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 200,
      enforceSizeThreshold: 20000,
      automaticNameDelimiter: '-',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    }
  },
  plugins: [
    new webpack.AutomaticPrefetchPlugin()
  ]
};