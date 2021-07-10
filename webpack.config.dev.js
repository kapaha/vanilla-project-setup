const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.config.common');

module.exports = merge(common, {
    mode: 'development',

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin(),
    ],

    devtool: 'inline-source-map',

    devServer: {
        contentBase: './public',
        hot: true,
    },

    output: {
        filename: '[name].bundle.js',
        assetModuleFilename: 'images/[name][ext][query]',
    },
});
