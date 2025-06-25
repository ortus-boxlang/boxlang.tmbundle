const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.ttf$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MonacoWebpackPlugin({
      languages: [], // We'll register BoxLang manually
      features: [
        'coreCommands',
        'find',
        'format',
        'hover',
        'multicursor',
        'suggest',
        'folding',
        'bracketMatching',
        'colorDecorator',
        'codelens',
        'contextmenu',
        'quickCommand',
        'smartSelect'
      ]
    }),
  ],
  devServer: {
    static: './dist',
    open: true,
    port: 3000,
  },
};
