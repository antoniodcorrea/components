const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: {
    Span: './src/components/Span/index.tsx',
    Border: './src/components/Border/index.tsx',
    Switch: './src/components/Switch/index.tsx',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: ['[name]'],
    libraryTarget: 'umd',
  },
  resolve: {
    modules: ['node_modules', './src'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      svg: path.resolve(__dirname, 'src/assets/svg/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        use: ['awesome-typescript-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
