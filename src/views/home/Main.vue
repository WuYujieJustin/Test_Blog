<template>
    <blog-list :isCanedit="false" />
    <!-- <div>
        <div
            @click="toDetail(blog)"
            v-for="(blog, index) in blogList"
            :key="index"
        >
            {{ blog.title }}
        </div>
    </div> -->
</template>

<script>
import { BLOGLIST } from 'constant/localKey'
import api from 'api/blog'

export default {
    data() {
        return {
            content: '',
            blogList: []
        }
    },
    created() {
        // this.getBlogList()
    },
    methods: {
        getBlogList() {
            api.getBlogList().then(res => {
                res.reverse().forEach(blog => {
                    this.blogList.push({
                        title: blog.name,
                        path: blog.path,
                        url: blog.html_url,
                        sha: blog.sha
                    })
                })
                localStorage.setItem(BLOGLIST, JSON.stringify(this.blogList))
            })
        },
        toDetail(blog) {
            this.$router.push({
                name: 'BlogDetail',
                query: { path: blog.path, sha: blog.sha }
            })
        },
        download() {
            api.getBlogDetail('README.md').then(res => {
                this.content = res.content
            })
        }
    }
}
</script>
