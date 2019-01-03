const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const HtmlReplacePlugin = require('./pack-plugins/html-replace-plugin.js');
const BuildCleanPlugin = require('./pack-plugins/build-clean-plugin.js');
const fs = require('fs');

fs.open('./src/config/env.js', 'w', function (err, fd) {
    const buf = 'export default "production";';
    fs.write(fd, buf, 0, buf.length, 0, function (err, written, buffer){});
});

const contextPath = 'liveshow'; //上下文
const publicPath = "/"+contextPath /*+ '/dist/'*/;  //请求路径
const outputPath = path.join(__dirname, '../dist');

module.exports = merge(webpackBaseConfig, {
    output: {
        path: outputPath,//指定打包路径
        publicPath: ''  /*'/ms-admin/static/liveshow/'*/  /*publicPath*/,//指定html中引用路径的上下文
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].chunk.js'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].[hash].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.[hash].js'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',   //相对于output path
            template: './src/template/index-prod.ejs',
            inject: false
        }),
        new BuildCleanPlugin({
            path: [outputPath]
        }),
        new HtmlReplacePlugin({
            replacements: [
                {
                    key: "jspHeader", value:
                    `<%
                        final String path = request.getContextPath();
                        request.setAttribute("_path",path);
                        response.setHeader("Pragma","No-cache");
                        response.setHeader("Cache-Control","no-cache");
                        response.setDateHeader("Expires", 0);
                    %>`
                },
                {
                    key: "jspBase", value: contextPath
                }
            ]
        }),

        // new webpack.ProvidePlugin({
        //     PRODUCTION: JSON.stringify("99999"),
        //     VERSION: JSON.stringify("99999")
        // })，
        new webpack.DefinePlugin({
            BASE: "BASE"
        })
    ]
});
