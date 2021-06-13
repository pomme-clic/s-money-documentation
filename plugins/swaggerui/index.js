const webpack = require('webpack');
const buffer = require('buffer');
module.exports = function (context, options) {
    return {
        name: 'custom-docusaurus-plugin',
        configureWebpack(config, isServer, utils) {
            const {
                getCacheLoader
            } = utils;
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
                        Buffer: [require.resolve("buffer/"), "Buffer"]
                        // Buffer: ['buffer', 'Buffer'],
                    }),
                ]
            };
        },
    };
};
// const webpack = require('webpack');

// module.exports = function (context, options) {
//     return {
//         name: 'swaggerui',
//         resolve: {
//             alias: {
//                 process: 'process/browser',
//                 stream: "stream-browserify",
//                 zlib: "browserify-zlib"
//             }
//         },
//         plugins: [
//             new webpack.ProvidePlugin({
//                 process: 'process/browser',
//                 Buffer: ['buffer', 'Buffer'],
//             }),
//         ]
//     };
// };