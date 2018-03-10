const path = require("path")
const htmlPlugins = require("html-webpack-plugin")
const htmlPlugin = new htmlPlugins({
    template:path.join(__dirname,"./src/index.html"),
    filename:"index.html"
})
module.exports={
    mode:"development", 
    plugins:[
        htmlPlugin
    ],
    module:{
        rules:[
            { test:/\.css$/,use:['style-loader','css-loader']},
            { test: /\.scss$/, use: ['style-loader', 'css-loader'] },
            { test: /\.ttf|eot|woff|woff2|svg$/, use: 'url-loader' },
            { test: /\.png|gif|bmp|jpg|jpeg$/, use: 'url-loader' },
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    }
}