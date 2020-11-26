const path = require("path");
module.exports = {
    entry: "./src/store.js",
    module:{
        rules:[
            {test: /\.js$/, use:'babel-loader'},
            {test: /\.s[ac]ss$/, use: ['style-loader','css-loader', 'sass-loader']},
        ]
    },
    output:{
        path: path.resolve(__dirname, "./public/js"),
        filename: 'main.js'
    }
}