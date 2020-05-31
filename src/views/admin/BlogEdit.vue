<template>
    <div class="admin-page">
        <input v-if="path" v-model="name" type="text" />
        <mark-down
            ref="markdown"
            @on-content-save="save"
            v-model="content"
        ></mark-down>
        <button v-if="path" @click="createBlog">保存</button>
    </div>
</template>

<script>
import api from 'api/blog'
import formatTransformer from 'mixins/formatTransformer'
export default {
    mixins: [formatTransformer],
    data() {
        return {
            content: '',
            name: ''
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
        createBlog() {
            console.log(this.name, this.content)
        },
        save(value) {
            // this.content = value.html
            console.log(value)
            this.content = value.value
        },
        getBlogDetail() {
            if (this.path) {
                api.getBlogDetail(this.path).then(res => {
                    console.log(res)
                    this.content = this.base2str(res.content)
                    this.name = 1
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
