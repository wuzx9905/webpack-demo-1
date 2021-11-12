const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { title } = require('process');


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: 'My App',
        template: 'src/assets/index.html'
    })],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};

