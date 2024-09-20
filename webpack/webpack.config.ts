import path from 'path';
import nodeExternals from 'webpack-node-externals';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ROUTE_SRC, ROUTE_DIST } from './constants';

module.exports = {
  name: 'Components',
  mode: 'production',
  entry: path.join(ROUTE_SRC, 'index.ts'),
  output: {
    library: 'Components',
    filename: 'index.js',
    path: ROUTE_DIST,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    clean: true,
  },
  // For node, as we want to do SSR with them
  target: 'node',
  // Don't include node_modules neither React in the modules bundles
  externals: [nodeExternals()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(less|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
  stats: 'errors-only',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
  ],
};
