const webpack = require('webpack');

module.exports = {
    resolve: {
        alias: {
            process: 'process/browser',
            stream: "stream-browserify",
            zlib: "browserify-zlib"
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
    ]
}