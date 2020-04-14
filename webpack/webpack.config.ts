import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ROUTE_SRC, ROUTE_DIST } from './constants';

module.exports = {
  name: 'Components',
  entry: path.join(ROUTE_SRC, 'components/index.ts'),
  output: {
    filename: 'index.js',
    path: ROUTE_DIST,
    libraryTarget: 'commonjs2',
    globalObject: '(typeof self !== \'undefined\' ? self : this)', // https://stackoverflow.com/questions/49111086/webpack-4-universal-library-target
    library: 'Components',
    umdNamedDefine: true,
  },
  // For node, as we want to do SSR with them
  target: 'node',
  devtool: '#source-map',
  // Don't include node_modules neither React in the modules bundles
  externals: [nodeExternals(), 'react', 'react-datepicker'],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
    alias: {
      Svg: path.join(ROUTE_SRC, 'assets/svg/'),
      Components: path.resolve(ROUTE_SRC, 'components/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: ['ts-loader'],
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
  // Messages on the console
  stats: 'errors-only',
  plugins: [
    // Clean before each build
    new CleanWebpackPlugin({
      dry: false,
      verbose: true,
      protectWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: [path.join(ROUTE_DIST, '/**/*')],
      cleanAfterEveryBuildPatterns: [path.join(ROUTE_DIST, 'build')],
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
  ],
};
