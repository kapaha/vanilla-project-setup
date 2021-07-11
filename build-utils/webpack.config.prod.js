const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'production',

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].bundle.css',
        }),
    ],

    optimization: {
        minimizer: [
            `...`,
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '..', './src/index.html'),
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
};
