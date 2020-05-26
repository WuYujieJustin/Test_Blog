export default [
    {
        name: 'Admin',
        path: '',
        component: () => import('../views/admin/Main.vue')
    },
    {
        name: 'BlogEdit',
        path: '/edit',
        component: () => import('../views/admin/BlogEdit.vue')
    }
]
