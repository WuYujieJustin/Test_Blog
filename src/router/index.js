import Vue from 'vue'
import Router from 'vue-router'
import commonRoutesMap from './commonRouter.js'
Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: commonRoutesMap,
    // 滚动行为
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from)
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

router.beforeEach((to, from, next) => {
    console.log('to', to)
    console.log('from', from)
    next()
})

export default router
