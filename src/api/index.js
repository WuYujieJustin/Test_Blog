import axios from 'axios'
// import router from '../router'

// const local = window.localStorage
const API_ROOT = process.env.VUE_APP_API_ROOT

const api = axios.create({
  baseURL: API_ROOT,
  headers: { 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' }
})

api.interceptors.response.use(function (response) {
  return response.data.data
}, function (error) {
  if (!error.response) {
    // console.info('网络请求错误，可能是服务器挂掉了')
    return Promise.reject(error)
  }
//   if (error.response.status === 401) {
//     window.localStorage.removeItem('auth.jwt')
//     router.push('/login')
//   } else if (error.response.status === 500) {
//     let json = { data: { message: '服务器错误' } }
//     return Promise.reject(json)
//   }
  return Promise.reject(error.response.data)
})

export default api
