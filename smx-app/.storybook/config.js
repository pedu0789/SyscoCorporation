import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.

  const genDefaultConfig = require('@storybook/react/dist/server/config/defaults/webpack.config.js');
    module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env);
    // Extend it as you need.
    // For example, add typescript loader:
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('awesome-typescript-loader')
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
}

configure(loadStories, module);