<template>
    <div>
        <!-- <button @click="download">download</button> -->
        <div
            @click="toDetail(blog)"
            v-for="(blog, index) in blogList"
            :key="index"
        >
            {{ blog.title }}
        </div>
    </div>
</template>

<script>
import BLOGLIST from 'constant/localKey'
import api from 'api/blog'

export default {
    data() {
        return {
            content: '',
            blogList: []
        }
    },
    created() {
        this.getBlogList()
    },
    methods: {
        getBlogList() {
            api.getBlogList().then(res => {
                console.log(res)
                res.forEach(blog => {
                    this.blogList.push({
                        title: blog.name,
                        path: blog.path,
                        url: blog.html_url,
                        sha: blog.sha
                    })
                })
                localStorage.setItem(BLOGLIST, this.blogList)
            })
        },
        toDetail(blog) {
            console.log(blog.path)
            this.$router.push({
                name: 'BlogDetail',
                query: { path: blog.path }
            })
        },
        download() {
            api.getBlogDetail('README.md').then(res => {
                console.log(res)
                this.content = res.content
            })
        }
    }
}
</script>
