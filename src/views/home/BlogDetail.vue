<template>
    <div>
        详情页
        {{ content }}
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
            content: ''
        }
    },
    created() {
        this.getBlogDetail()
    },
    methods: {
        getBlogDetail() {
            api.getBlogDetail(this.path).then(res => {
                console.log(res)
                this.content = res
            })
        }
    }
}
</script>
