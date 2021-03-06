const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require('vue-loader')


module.exports = {
    entry: path.join(__dirname,"./src/main.js"),
    output: {
        path: path.join(__dirname,"./dist/"),
        filename: "bundel.js"
    },

    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname,"./src/index.html"),
            filename: "index.html"
        }),
        
        new VueLoaderPlugin()
    ],

    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader','css-loader']},
            
            {test: /\.jpg|png|gif|bmp$/, use: ['url-loader']},

            {test: /\.js$/, use:  'babel-loader', exclude: /node_modules/},

            {test: /\.vue$/, use: 'vue-loader'},

            { test: /\.ttf|woff|woff2|eot|svg$/, use: 'url-loader' }, // 处理 样式中字体文件路径的问题
        ]
    },

    resolve: {
        alias: { // 别名
        'vue$': 'vue/dist/vue.js'
        } 
    }
}
