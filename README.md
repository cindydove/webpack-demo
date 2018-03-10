# webpack 基础环境

 + 没有配置VUE开发需要的各种工具，eg：vue-router  vuex
 + 基于webpack 4.x 

## 配置步骤
  1. `npm init -y`
  2. `cnpm i`
  3. `cnpm i webpack webpack-cli -D`
  4. 新建 `webpack.config.js`文件
    + 配置`const path = require("path")`
    + 导出一个对象`module.exports={}`
    + 添加 `mode` 节点,有两个属性值 `production`  `production`
      ```js
        module.exports={
      mode:"development"
        }
      ```
  5. 同级新建 `dist` 文件夹， `src` 文件夹
    + 默认如果不提供 `entry` 属性，默认 以 `src -> index.js` 当作打包入口
    + 默认如果不提供`output`属性，约定了 打包好的 文件，放到 `dist -> main.js` 中
  6. 安装在内存中生成HTML页面的插件
    + `cnpm i html-webpack-plugin@webpack-contrib/html-webpack-plugin -D `
    + 暂时需要用这个语句去安装
    + 在`webpack.config.js`中进行配置
  
      ```js
       const htmlPlugin = require("html-webpack-plugin")
       const htmlPlugin = new htmlPlugin({
          template:path.join(__dirname,"./src/index.html"),
          filename:"index.html"
       })
      ```
      + 在导出的对象中配置插件属性
       ```js
        plugins:[
          htmlPlugin
         ]
       ```
  7. 实时打包
    + `cnpm i webpack-dev-server -D`
    + 在package.json文件的scripts节点中添加以下内容
      - `"dev": "webpack-dev-server --open chrome --port 3000 --host 127.0.0.1 --compress --progress --hot"`
    + `npm run dev` 运行项目
  8. 配置各项loader
    + css
      - `cnpm i style-loader css-loader -D`
      - 找到`webpack.config.js`配置文件，新增一个`module`节点，并为`module`节点提供`rules`数组匹配规则
      ```js
       module: { // 这个 module 节点，可以配置好多的第三方 loader模块
       rules: [ // 这个  rules 是 第三方文件后缀名的匹配规则， 在这里，是通过后缀名来匹配规则的
         { test: /\.css$/, use: ['style-loader',  'css-loader'] }
       ]
       }
      ```
    + url
      -  `cnpm i url-loader file-loader -D`
      -  `{ test: /\.ttf|eot|woff|woff2|svg$/, use: 'url-loader' }` 
      - `{ test: /\.png|gif|bmp|jpg|jpeg$/, use: 'url-loader' }`
    + scss
      + `cnpm i sass-loader node-sass -D `
      + ` { test: /\.scss$/, use: ['style-loader', 'css-loader'] }`
  9. 使用babel处理高级JS语法
    + `cnpm i babel-core babel-loader babel-plugin-transform-runtime -D`
    + `cnpm i babel-preset-env babel-preset-stage-0 -D` 
    + `{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }`
    + 添加`.babelrc` 的`babel`配置文件，里面配置了`babel`要用到的语法和插件，注意，这个文件中，必须符合JSON规范，因此，不能使 用单引  号和注释：
    ```json
     {
     "presets": ["env", "stage-0"],
     "plugins": ["transform-runtime"]
     }
    ```
  10. 配置默认文件名
    + 在`webpack.config.js`配置文件，新增一个`resolve`节点
     ```js
      resolve:{
       extensions:['.js','.jsx','.json']
      }
     ```

## 用法

 + 先将仓库复制到本地
 1. `cnpm i `
 2. `cnpm i html-webpack-plugin@webpack-contrib/html-webpack-plugin -D `
 3. `npm run dev` 运行项目