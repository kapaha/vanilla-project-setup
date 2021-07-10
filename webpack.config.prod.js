const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const common = require('./webpack.config.common');

module.exports = merge(common, {
    mode: 'production',

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],

    optimization: {
        minimizer: [
            `...`,
            new HtmlWebpackPlugin({
                template: './src/index.html',
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true,
                },
            }),
            new CssMinimizerPlugin(),
        ],
    },

    devtool: 'source-map',

    output: {
        filename: '[name].[contenthash].bundle.js',
        assetModuleFilename: 'images/[hash][ext][query]',
    },
});
