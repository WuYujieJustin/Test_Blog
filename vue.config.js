const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')

const path = require('path')

const resolve = dir => path.join(__dirname, dir)
module.exports = {
    chainWebpack: config => {
        config.resolve.alias
            //   公共样式和工具类
            .set('scss', resolve('src/assets/scss'))
            //   公共store模块
            // .set('store', resolve('src/store'))
            //   公共工具类和工具函数
            // .set('utils', resolve('src/utils'))
            //   公共常量, 例如地区字典值
            .set('constant', resolve('src/constant'))
            //   公共组件
            .set('components', resolve('src/components'))
            //   公共过滤器
            // .set('filters', resolve('src/filters'))
            //   公共api
            .set('api', resolve('src/api'))
            //   公用的vue插件
            // .set('plugin', resolve('src/plugin'))
            //   公用的图片
            // .set('img', resolve('src/assets/img'))
            //   公用的mixin
            .set('mixins', resolve('src/mixins'))
            //   公用的vue页面
            .set('views', resolve('src/view'))
            // .set('plugins', resolve('src/plugins'))
    },
    configureWebpack: config => {
        config.plugins.push(new MonacoWebpackPlugin())
    }
}
