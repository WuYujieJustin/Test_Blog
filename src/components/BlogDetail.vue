<template>
    <div>
        {{ content }}
    </div>
</template>

<script>
import api from 'api/blog'
export default {
    name: 'BlogDetail',
    computed: {
        path() {
            return this.$route.query.path
        }
    },
    data() {
        return {
            content: ''
        }
    },
    created() {
        this.getBlogDetail()
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
