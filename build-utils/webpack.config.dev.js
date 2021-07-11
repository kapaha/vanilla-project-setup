const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './src/index.html'),
        }),
        new MiniCssExtractPlugin(),
    ],

    devtool: 'inline-source-map',

    devServer: {
        contentBase: path.resolve(__dirname, '..', './dist'),
    },

    output: {
        filename: '[name].bundle.js',
        assetModuleFilename: 'images/[name][ext][query]',
    },
};
