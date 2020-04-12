import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import nodeExternals from 'webpack-node-externals';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

module.exports = {
  name: 'server',
  entry: {
    Span: path.join(__dirname, 'src/components/Span/index.tsx'),
    Border: path.join(__dirname, 'src/components/Border/index.tsx'),
    Button: path.join(__dirname, 'src/components/Button/index.tsx'),
    Switch: path.join(__dirname, 'src/components/Switch/index.tsx'),
    Tag: path.join(__dirname, 'src/components/Tag/index.tsx'),
  },
  output: {
    filename: 'src/components/[name]/index.js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
    globalObject: '(typeof self !== \'undefined\' ? self : this)', // https://stackoverflow.com/questions/49111086/webpack-4-universal-library-target
    library: 'MyLib',
    umdNamedDefine: true,
  },
  target: 'node',
  // devtool: '#source-map',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
  externals: [nodeExternals(), 'react'],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.svg'],
    alias: {
      Components: path.resolve(__dirname, 'src/components/'),
      Svg: path.resolve(__dirname, 'src/assets/svg/'),
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
    new CleanWebpackPlugin({
      dry: false,
      verbose: true,
      protectWebpackAssets: false,
      cleanOnceBeforeBuildPatterns: [path.join(__dirname, 'dist', '/**/*')],
      cleanAfterEveryBuildPatterns: [path.join(__dirname, 'dist', 'webpack.config.d.ts')],
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'src/components/*d.ts'),
        to: path.join(__dirname, 'dist'),
      },
    ]),
    new MiniCssExtractPlugin({
      filename: 'src/components/[name]/[name].css',
    }),
  ],
};
