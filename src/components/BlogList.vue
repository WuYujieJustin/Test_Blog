<template>
    <div>
        <!-- <button @click="download">download</button> -->
        <div
            @click="toDetail(blog)"
            v-for="(blog, index) in blogList"
            :key="index"
        >
            {{ blog.title }}
            <div class="operate-btns" v-if="isCanedit">
                <button @click="editBlog(blog.path)">修改</button>
                <button @click="editBlog(null)">新建</button>
                <button @click="deleteBlog">删除</button>
            </div>
        </div>
    </div>
</template>

<script>
import { BLOGLIST } from 'constant/localKey'
import api from 'api/blog'

export default {
    name: 'BlogList',
    prop: {
        isCanEdit: {
            type: Boolean,
            default: false
        }
    },
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
        editBlog(path) {
            this.$router.push({ name: 'BlogEdit', query: { path } })
        },
        deleteBlog() {
            console.log('delete')
        },
        toDetail(blog) {
            if (!this.isCanEdit) {
                this.$router.push({
                    name: 'BlogDetail',
                    query: { path: blog.path, sha: blog.sha }
                })
            }
        }
    }
}
</script>
