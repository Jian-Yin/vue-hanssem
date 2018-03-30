# vue-project

> A Vue.js project

基于vue实现的汉森首页,简易的list，myaccount等页面，技术栈 es6 + vue-router + axios + iscroll + swiper

对build以及config文件夹下的配置文件有详细分析

package.json 包功能
{
  "name": "vue-hanssem",
  "version": "1.0.0",
  "description": "A Vue.js project",
  "author": "jian.yin",
  "private": true,
  "scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "build": "node build/build.js"
  },
  "dependencies": {
    "axios": "^0.17.1",
    // 用来和后端交互数据
    "iscroll": "^5.2.0",
    "swiper": "^4.0.7",
    "vue": "^2.5.2",
    "vue-router": "^3.0.1"
    // 用来和后端交互数据
  },
  "devDependencies": {
    "autoprefixer": "^7.1.2",
    // 添加css3前缀
    "babel-core": "^6.22.1",
    // babel的一个api库
    "babel-loader": "^7.1.1",
    // 将babel转化为模块
    "babel-plugin-transform-runtime": "^6.22.0",
    // 替换助手函数 包括部分es6的API，但是某些情况不会替换
    "babel-preset-env": "^1.3.2",
    "babel-preset-stage-2": "^6.22.0",
    // 为babel预置stage-2插件
    "babel-register": "^6.22.0",
    "chalk": "^2.0.1",
    // 一个颜色的插件。可以通过chalk.blue(‘hello world’)来改变颜色
    "copy-webpack-plugin": "^4.0.1",
    // 拷贝文件和文件夹
    "css-loader": "^0.28.0",
    // 将css转化为模块
    "eventsource-polyfill": "^0.9.6",
    // 支持w3c规范, 一个浏览器w3c eventsource的ployfill, 在不支持事件源的浏览器里添加填充策略支持
    // 先检查浏览器是否支持某个api, 如果不支持就加载对应的polyfill
    "extract-text-webpack-plugin": "^3.0.0",
    // 把css打包成独立的文件 样式通过link引入，而不是放在style标签内
    "file-loader": "^1.1.4",
    // 将file转化为模块 处理图片等
    "friendly-errors-webpack-plugin": "^1.6.1",
    "html-webpack-plugin": "^2.30.1",
    // 根据模板创建html文件
    "node-notifier": "^5.1.2",
    // 在macOS，Windows和Linux上显示原生通知
    "node-sass": "^4.7.2",
    "optimize-css-assets-webpack-plugin": "^3.2.0",
    "ora": "^1.2.0",
    // 终端显示的 loading 插件
    "portfinder": "^1.0.13",
    // 查找当前机器上的开放端口或域套接字
    "postcss-import": "^11.0.0",
    "postcss-loader": "^2.0.8",
    "rimraf": "^2.6.0",
    "sass-loader": "^6.0.6",
    "semver": "^5.3.0",
    "shelljs": "^0.7.6",
    // Node.js 扩展，用于实现 Unix shell 命令执行
    "url-loader": "^0.5.8",
    // 将url转化为模块
    "vue-loader": "^13.3.0",
    // 将vue component转化为模块
    "vue-style-loader": "^3.0.1",
    // 将vue style转化为模块
    "vue-template-compiler": "^2.5.2",
    "webpack": "^3.6.0",
    "webpack-bundle-analyzer": "^2.9.0",
    "webpack-dev-server": "^2.9.1",
    // 更改时更新浏览器
    "webpack-merge": "^4.1.0"
    // 合并webpack配置 可以是 array 或 object
  },
  "engines": {
    "node": ">= 4.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
