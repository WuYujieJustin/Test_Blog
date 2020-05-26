import Vue from 'vue'

// 自动加载 components 目录下的 .vue 结尾的文件
const context = require.context('./', true, /\.vue/)

context.keys().forEach(component => {
    const componentConfig = context(component)
    /**
     * 兼容 import export 和 require module.export 两种规范
     */
    const ctx = componentConfig.default || componentConfig
    // const content = () => ({
    //     component: () => import(component),
    //     loading: () => import('./Loading.vue'),
    //     error: () => import('./Loading.vue'),
    //     delay: 100,
    //     timeout: 3000
    // })
    Vue.component(ctx.name, ctx)
})
