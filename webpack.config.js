//const { resolve } = require('path');
//contentBase: resolve(__dirname, 'html'),

const config = {

  entry: [
    './app/main.js'
  ],

  output: {
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: __dirname + '/html',
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'image/png',
              name: 'images/[name].[ext]',
            }
          }
        ],
      },
      {
        test: /\.eot(\?v=\d+.\d+.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]'
            }
          }
        ],
      }
    ]
  }
};

module.exports = config;
