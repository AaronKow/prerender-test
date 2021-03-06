/*----------------------------------------------*\
  # 1. Required modules
\*----------------------------------------------*/
var path = require('path'),
    webpack = require('webpack'),
    HTMLWebpackPlugin = require('html-webpack-plugin');



/*----------------------------------------------*\
  # 2. Config Variables
\*----------------------------------------------*/
/* ENTRY FILES */
const entry = './src/index.js',

    minify = {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        decodeEntities: true,
        html5: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeTagWhitespace: true,
        sortAttributes: true,
        sortClassName: true,
        trimCustomFragments: true,
        useShortDoctype: true
    },


    /* PLUGINS List */
    plugins = [
        // for js
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            comments: false,
            mangle: true,
            compress: {
                warnings: true
            }
        }),

        // for html
        new HTMLWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            minify: minify
        }),
        new HTMLWebpackPlugin({
            template: 'index-2.html',
            filename: 'index-2.html',
            minify: minify
        })
    ];




/*----------------------------------------------*\
  # 3. Configurations
\*----------------------------------------------*/
module.exports = {
    devtool: 'source-map',
    entry: entry,
    plugins: plugins,
    module: {
        rules: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: '/node_modules/'
        }, {
            test: /\.html$/,
            loader: 'prerender-loader?string'
        }]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: './',
        filename: 'bundle.[hash:12].min.js'
    }
}
