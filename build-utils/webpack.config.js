const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.config.common');
const prodConfig = require('./webpack.config.prod');
const devConfig = require('./webpack.config.dev');

module.exports = ({ env }) => {
    const envConfig = env === 'prod' ? prodConfig : devConfig;

    return merge(commonConfig, envConfig);
};
