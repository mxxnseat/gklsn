const {merge} = require("webpack-merge");
const base = require("./webpack.config");


module.exports = merge(base,{
    output:{
        publicPath: './public/js'
    },
    devServer:{
        publicPath: '/js',
        contentBase: './public',
        port: 1111,
        host: 'localhost',
        hot: true,
    }
})