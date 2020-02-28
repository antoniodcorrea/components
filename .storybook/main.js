const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  excludeStories: /.*Props$/,
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-knobs/register'],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.less$/,
      use: ['style-loader', 'css-loader', 'less-loader'],
      include: path.resolve(__dirname, '../'),
    });

    /* START https://github.com/storybookjs/storybook/issues/5708#issuecomment-467364602 */

    config.module.rules.push({
      test: /\.svg$/,
      loader: 'raw-loader',
      include: path.resolve(__dirname, '../'),
    });

    config.resolve.extensions.push('.svg');

    config.module.rules.forEach(function(data, key) {
      if (data.test.toString().indexOf('svg|') >= 0) {
        config.module.rules[key].test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
        return false;
      }
    });

    /* END https://github.com/storybookjs/storybook/issues/5708#issuecomment-467364602 */

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx', '.svg');
    config.resolve.alias = {
      components: 'src/components',
    };

    return config;
  },
};
