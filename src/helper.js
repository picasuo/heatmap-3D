import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://super-api.retailwell.com',
})

axiosInstance.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json; charset=UTF-8'
    config.headers['user-token'] =
      // 'eyJhbGciOiJIUzUxMiIsImlhdCI6MTYzNjk0NTExMiwiZXhwIjoxNjM4MjQxMTEyfQ.eyJpZCI6MTF9.xisCHRm8tTzK-CmOcy96XvWd6ilpxJeM48cfAcOdfcJU9w1kgJ8AootCF1QpsYcjhoGJmG-A8-9J-kmQghfkLw'
      'eyJhbGciOiJIUzUxMiIsImlhdCI6MTYzNjM4MjYwNywiZXhwIjoxNjM3Njc4NjA3fQ.eyJpZCI6MTJ9.PVD4nDgup80AdQ10Y2UWE6OTn6gf3SiOZztcev-NOqlTl0RpidjgXif8t1-RLnwU7e2I7xmZ_JECrk4k6RUdLQ'
    config.headers['mall-token'] =
      // 'eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTF9.-jRLdLOEefWTmXxs1Re3ZXXGH2tmgF8AigVrEkedXeBo5TrfN5LezTfyz965WctXVLsKDdsWjt7lM0qk9vugHg'
      'eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTJ9.G7r0gp31YTywyHukrh8bN8pMfuyEtzgiPQCefqo7rDdICr0YvDg8Cbgi-W1zF0yg4h9LkUNFS5fy1g0GQNfd5w'
    // 删除headers中key值为空(falsy)的header
    for (const prop in config.headers) {
      if (!config.headers[prop]) {
        delete config.headers[prop]
      }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  response => {
    // console.log('response', response)

    return response.data
  },
  error => error
)

export default axiosInstance
