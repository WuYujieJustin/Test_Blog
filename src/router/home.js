export default [
    {
        name: 'Main',
        path: '',
        component: () => import('../views/home/Main.vue')
    },
    {
        name: 'BlogDetail',
        path: '/detail',
        component: () => import('../views/home/BlogDetail.vue')
    }
]
