const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    output: {
        filename: '[name].[chunkhash:8].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
}