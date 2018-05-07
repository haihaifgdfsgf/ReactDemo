var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname + '/src',
    entry: './js/index.js', //入口文件
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }

        ]
    },
    output: {
        path: __dirname + '/src/',//出口路径
        filename: 'bundle.js'//出口名称
    },

}