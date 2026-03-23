import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import cookieHelper from '~/helpers/cookie.helper'
import { eErrorCode } from '~/types/enums/errors-code.enum'

let hasShow401Toast = false

const configs: AxiosRequestConfig = {
  baseURL: 'https://68faf58e94ec96066024168d.mockapi.io/api/v1',
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*'
  },
  timeout: 10000
}

const axiosClient: AxiosInstance = axios.create(configs)
axiosClient.interceptors.request.use((request: InternalAxiosRequestConfig) => {
  const authorization = cookieHelper.getAccessToken()
  if (request.url && request.url.includes('auth/refresh-token')) {
    request.headers.set('refresh', cookieHelper.getRefreshToken())
  }
  if (authorization) {
    request.headers.set('Authorization', `Bearer ${authorization}`)
  }

  return request
})

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (([200, 201].includes(response.status) && response.data) || [204].includes(response.status)) {
      const isSuccess = response?.data?.success
      if (!isSuccess) {
        const errorMessage = response?.data?.statusValue
        if (errorMessage) {
          // toast.error(errorMessage)
        }
      }
      return response.data
    }
    return Promise.reject(response.statusText || '')
  },
  async (error) => {
    // Error code
    const errorCode = error?.response?.status || error?.response?.data?.statusCode

    // Message
    const errorMessage = error?.response?.statusValue

    // Errorcode - Unauthorized
    if (errorCode === Number(eErrorCode.Unauthorized)) {
      cookieHelper.removeAccessToken()
      if (!hasShow401Toast) {
        hasShow401Toast = true
        // toast.error(errorMessage)
        setTimeout(() => {
          window.location.href = '/'
        }, 500)
      }
      return Promise.reject(error?.response?.data)
    }
    // toast.error(errorMessage || 'Error')
    return Promise.reject(error?.response?.data)
  }
)
export default axiosClient
