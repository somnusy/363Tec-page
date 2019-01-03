const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const fs = require('fs');

fs.open('./src/config/env.js', 'w', function (err, fd) {
    const buf = 'export default "development";';
    fs.write(fd, buf, 0, buf.length, 0, function (err, written, buffer){});
});

module.exports = merge(webpackBaseConfig, {
    devtool: '#source-map',
    output: {
        publicPath: '/dist/',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js'
        }),
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: './src/template/index.ejs',
            inject: false
        }),
        // new webpack.ProvidePlugin({      //require 插件
        //     PRODUCTION: JSON.stringify("99999"),
        //     VERSION: JSON.stringify("99999")
        // }),
        new webpack.DefinePlugin({
            BASE: JSON.stringify("/json"),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: "1+1",
            "typeof window": JSON.stringify("object")
        })
    ],
    devServer: {
        host: '127.0.0.1',
        port: 8020,
        proxy: {
          '/json': {
            //target: 'http://192.168.158.105:18080/MIGUMS',
            target: 'http://127.0.0.1:8080',
            changeOrigin: true,
            pathRewrite: {
              '^/json': ''
            }
          }
        }
    },
});
