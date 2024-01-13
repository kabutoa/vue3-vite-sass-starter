import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'https://api.github.com'

const request = Axios.create({
  baseURL,
  timeout: 20000
})

request.interceptors.request.use(
  (config) => {
    return config
  },
  async (error) => {
    return await Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    return response.data
  },
  async (error) => {
    ElMessage.error(`${error}`)

    return await Promise.reject(error)
  }
)

export default request
