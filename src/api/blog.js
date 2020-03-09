import api from './index'
export default {
    // 获取博客详情
    getBlogDetail(path) {
        return api.get(`/repos/WuYujieJustin/Vue_Useful_Skill/contents/${path}`)
    },
    getBlogList() {
        return api.get('/repos/WuYujieJustin/Vue_Useful_Skill/contents/blog/')
    }
}
