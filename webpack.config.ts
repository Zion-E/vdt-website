export {};

const path = require('path');
const webpack = require('webpack');
const { ProvidePlugin } = webpack;

module.exports = {
  entry: './src/index.tsx', // Change 'index.tsx' to your entry point file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      // Add more rules for other files like CSS, images, etc., if needed
    ],
  },
  plugins: [
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    // Add other plugins here
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000,
    // Add other devServer options if needed
  },
};
