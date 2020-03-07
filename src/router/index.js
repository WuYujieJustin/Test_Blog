import Vue from 'vue'
import Router from 'vue-router'
import commonRoutesMap from './commonRouter.js'
Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: commonRoutesMap
})

router.beforeEach((to, from, next) => {
    console.log('to', to)
    console.log('from', from)
    console.log('router', router.app.$options.store)
    next()
})

export default router
