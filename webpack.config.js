var webpack = require('webpack')
var path = require('path')

var DIST_DIR=path.resolve(__dirname,'dist');
var SRC_DIR=path.resolve(__dirname,'src');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var config={
    entry: [SRC_DIR + "/app/index.js",SRC_DIR + '/scss/main.scss'],
    output:{
        path: DIST_DIR+"/app",
        filename:"bundle.js",
        publicPath:"/app/"
    },
    module:{
        rules:[
            {
                test:/\.js?/,
                include: SRC_DIR,
                loader:'babel-loader',
                query:{
                    presets:["react","es2015","stage-2"]
                }
            },
            { // regular css files
                test: /\.css$/,
                include:SRC_DIR,
                loader: ExtractTextPlugin.extract({
                  loader: 'css-loader?importLoaders=1',
                }),
            },
            { // sass / scss loader for webpack
                test: /\.(sass|scss)$/,
                include:SRC_DIR,
                loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
            }        
        ]
    },
    plugins: [
        new ExtractTextPlugin({ // define where to save the file
          filename: 'dist/scss/styles.bundle.css',
          allChunks: true,
        }),
      ],   
}

module.exports=config;