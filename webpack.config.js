const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'js/app.js'
    },
    resolve: {
        alias: {
            pages: path.resolve(__dirname, './src/pages'),
            components: path.resolve(__dirname, './src/components'),
            util: path.resolve(__dirname, './src/util'),
            service: path.resolve(__dirname, './src/service')
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            //处理图片资源
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            },
            //处理字体资源
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'resource/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        //生成html文件
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            favicon: './favicon.ico'
        }),
        //独立出css文件，不在bundle.js中
        new ExtractTextPlugin("css/[name].css"),
        //提出公共的模块
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js' //通用的打包文件名
        })
    ],
    devServer: {
        //contentBase: './dist',
        port: 8086,
        historyApiFallback: {
            index: '/dist/index.html'
        },
        proxy: {
            '/manage': {
                target: 'http://admintest.happymmall.com',
                changeOrigin: true
            },
            '/user/logout.do': {
                target: 'http://admintest.happymmall.com',
                changeOrigin: true
            },
        }
    }
};