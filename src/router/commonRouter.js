/*
 * 通用路由配置，需要放在配置项数组的末端
 */

// 主页
import HomeRouter from './home'
// 管理后台
import AdminRouter from './admin'

export default [
    {
        path: '/',
        name: 'Home',
        // 配合webpack code spliting
        component: () => import('../views/Home'),
        children: [
            {
                path: '/home',
                component: () => import('../views/home/Home'),
                children: HomeRouter
            },
            {
                path: '/admin',
                component: () => import('../views/admin/Home'),
                children: AdminRouter,
                meta: {
                    // auth: true
                }
            }
        ]
    }
]
