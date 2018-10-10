const path = require('path');

const VueLoaderLibPlugin = require('vue-loader/lib/plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry:{
        app:'./src/app.js'
    },
    output:{
        filename:'app.js',
        path:path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader',
            },{
                test:/\.css$/,
                loader:"style-loader!css-loader"
            },{
                test:/\.(png|jpg|jpeg|git)$/,
                loader:'url-loader'
            }
        ]
    },
    plugins:[
        new VueLoaderLibPlugin(),
        new ExtractTextWebpackPlugin('style.css')
    ],
    devServer:{
        historyApiFallback: true,
        port:5051
    }
}