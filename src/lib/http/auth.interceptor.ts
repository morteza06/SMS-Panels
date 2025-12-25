import type { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios"
import { refreshTokenApi, revokeTokenApi } from "./token.api"
import { useAuthStore } from "@/features/identity/store/auth.store"

interface RetryConfig extends InternalAxiosRequestConfig {
  _retry?: boolean
}

export const setupAuthInterceptor = (api: AxiosInstance) => {
  // Request: attach access token
  api.interceptors.request.use((config) => {
    const token = useAuthStore.getState().accessToken

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  })

  // Response: handle 401
  api.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
      const originalRequest = error.config as RetryConfig
      const authStore = useAuthStore.getState()

      if (
        error.response?.status === 401 &&
        !originalRequest._retry &&
        authStore.refreshToken
      ) {
        originalRequest._retry = true

        try {
          const res = await refreshTokenApi(authStore.refreshToken)

          authStore.setAuth({
            accessToken: res.data.access_Token,
            refreshToken: res.data.refresh_Token,
          })

          originalRequest.headers.Authorization = `Bearer ${res.data.access_Token}`

          return api(originalRequest)
        } catch {
          // refresh failed → revoke + logout
          if (authStore.refreshToken) {
            await revokeTokenApi(authStore.refreshToken)
          }

          authStore.clearAuth()
          window.location.href = "/login"
        }
      }

      return Promise.reject(error)
    }
  )
}
