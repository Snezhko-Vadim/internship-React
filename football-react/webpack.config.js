const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    context: path.resolve(__dirname,'src'),
    mode:'development',
    entry:{
        main:'./index.js',
    },
    output:{
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname,'dist'),
        publicPath: '/'
    },
    resolve:{
        extensions:['.js','.json','.ts', '.tsx']
    },
    devtool: 'inline-cheap-source-map',
    devServer:{
        port:4200
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins:[
        new HTMLWebpackPlugin({
            template: '../index.html',
        }),
        new CleanWebpackPlugin(),
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader'],
            },
            {
                test:/\.(ttf|woff|woff2|eot)$/,
                use:['file-loader']
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                use: "ts-loader",
            }
        ]
    }
}