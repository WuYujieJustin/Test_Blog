<template>
    <div class="admin-page">
        <mark-down @on-content-save="save" v-model="content"></mark-down>
    </div>
</template>

<script>
import api from 'api/blog'
import formatTransformer from 'mixins/formatTransformer'
export default {
    mixins: [formatTransformer],
    data() {
        return {
            content: '# test'
        }
    },
    computed: {
        path() {
            return this.$route.query.path
        }
    },
    created() {
        this.getBlogDetail()
    },
    methods: {
        save(value) {
            // this.content = value.html
            console.log(value)
        },
        getBlogDetail() {
            if (this.path) {
                api.getBlogDetail(this.path).then(res => {
                    this.content = this.base2str(res.content)
                })
            }
        }
    }
}
</script>

<style scoped lang="scss">
.admin-page {
    width: 100%;
    height: 100%;
}
</style>
