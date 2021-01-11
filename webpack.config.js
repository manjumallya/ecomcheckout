const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const stubServerConfig = require('./test/stubs');
module.exports = ({ mode }) => {
    return {
        mode: 'development',
        devServer: {
            before(app) {
                stubServerConfig(app);
            },
            compress: true,
            overlay: true,
            open: true,
            openPage: `index.html`,
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html'
            }),
            new CopyWebpackPlugin(
                {
                    patterns: [{
                        context: 'node_modules/@webcomponents/webcomponentsjs',
                        from: '**/*.js',
                        to: 'webcomponents'
                    }]
                }
            )
        ],
        devtool: 'source-map'
    };
};
