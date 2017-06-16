var path = require('path');
var webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports={
    entry: {
        'polyfills':'./src/polyfills.ts',
        'vendor':'./src/vendor.ts',
        'applauncher':'./src/applauncher.ts',
        'app':'./src/main.ts'
    },
    output: {
        path: './dist',
        filename:'[name].js'
    },
    devtool: 'inline-source-map',
    module: {
        loaders:[
            {
                test:/\.ts$/,
                loader:'awesome-typescript-loader!angular2-template-loader',
                exclude:/node_modules/
            },
            {
                test:/\.html$/,
                loader:'raw'
            },
            {
                test:/\.css$/,
                exclude:path.resolve('src/app'),
                loader:ExtractTextPlugin.extract('style-loader','css-loader!postcss-loader')
            },
            {
                test:/\.css$/,
                include:path.resolve('src/app'),
                loader:'raw-loader!postcss-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?name=images/[name].[ext]?'
            }
        ]
    },
    resolve:{
        extensions:['','.js','.ts','.css','.html']
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            excludeChunks:['app']
        }),
        new HtmlWebpackPlugin({
            filename:'main.html',
            template:'./src/main.html',
            excludeChunks:['applauncher']
        }),
        new ExtractTextPlugin('css/app.css')
    ]
};