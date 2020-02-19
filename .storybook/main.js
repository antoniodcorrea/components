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

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
        },
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx', '.svg');

    return config;
  },
};
