const webpack = require('webpack');

module.exports = function (context, options) {
    return {
        name: 'swaggerui',
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
    };
};