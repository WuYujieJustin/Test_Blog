<template>
    <div>
        <blog-detail />
    </div>
</template>

<script>
import api from 'api/blog'
export default {
    computed: {
        path() {
            return this.$route.query.path
        }
    },
    data() {
        return {
            content: '',
            show: false
        }
    },
    created() {
        // this.getBlogDetail()
        // this.$nextTick(() => {
        // this.$refs.blog.getBlogDetail()
        // })
    },
    methods: {
        getBlogDetail() {
            api.getBlogDetail(this.path).then(res => {
                this.content = window.atob(res.content)
            })
        }
    }
}
</script>
