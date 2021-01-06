const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    // Environment mode
    mode: 'development',

    // Entry point of app
    entry: './index.html',

    output: {

        // Development filename output
        filename: 'bundle.js',
    },

    devServer: {

        // Enable compression
        compress: true,

        // Enable hot reloading
        hot: true,

        port: 3000,

        // Public path is root of content base
        publicPath: '/',

    },
    module: {
        rules: [
            { test: /\.html$/, use: 'html-loader' }
        ]
    },
    plugins: [
        // Re-generate index.html with injected script tag.
        // The injected script tag contains a src value of the
        // filename output defined above.
        new HtmlWebpackPlugin({
            inject: 'head',
            template: './index.html',
        }),
    ],
}
