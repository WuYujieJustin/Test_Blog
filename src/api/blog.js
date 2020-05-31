import api from './index'
export default {
    // 获取博客详情
    getBlogDetail(path) {
        return api.get(`/repos/WuYujieJustin/Test_Blog/contents/${path}`)
    },
    getBlogList() {
        return api.get('/repos/WuYujieJustin/Test_Blog/contents/blog/')
    },
    // https://developer.github.com/v3/repos/contents/#delete-a-file
    deleteBlog(path, data) {
        return api.delete(
            `/repos/WuYujieJustin/Test_Blog/contents/${path}`,
            data
        )
    },
    // Create or update a file
    createBlog(path) {
        return api.put(`/repos/WuYujieJustin/Test_Blog/contents/${path}`)
    }
}
