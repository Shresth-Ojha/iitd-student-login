const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        content: './src/content.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    mode: 'production',
    watch: true,
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{from : 'static'}]
        })
    ]
};
