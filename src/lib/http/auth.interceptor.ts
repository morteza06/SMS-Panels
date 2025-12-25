import {
  AxiosInstance,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios"

interface RetryRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean
}

export const setupAuthInterceptor = (apiClient: AxiosInstance) => {
  apiClient.interceptors.response.use(
    response => response,

    async (error: AxiosError) => {
      const originalRequest = error.config as RetryRequestConfig

      if (
        error.response?.status === 401 &&
        originalRequest &&
        !originalRequest._retry
      ) {
        originalRequest._retry = true

        // ⬇️ در اینجا بعداً refreshToken + AuthorizeMethod اضافه می‌شود
        // فعلاً فقط ساختار را آماده نگه می‌داریم
      }

      return Promise.reject(error)
    }
  )
}
