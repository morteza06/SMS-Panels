import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios"
import { useAuthStore } from "@/features/identity/store/auth.store"
import { refreshTokenApi } from "@/features/identity/api/refresh.api"
import type { RefreshResponse } from "@/features/identity/api/refresh.api"
import { apiClient } from "./apiClient"

/**
 * URLs that MUST NOT receive Authorization header
 */
const AUTH_EXCLUDED_URLS = ["/Identity/Login", "/Identity/RefreshToken"]

export const setupAuthInterceptor = (client: AxiosInstance) => {
  /**
   * =========================
   * Request Interceptor
   * =========================
   */
  client.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const url = config.url ?? ""

      const isExcluded = AUTH_EXCLUDED_URLS.some((path) =>
        url.includes(path)
      )

      if (isExcluded) {
        console.log("⛔ Skip auth header for", url)
        return config
      }

      const accessToken = useAuthStore.getState().accessToken

      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
      }

      console.log("📤 Request interceptor", {
        url,
        hasToken: !!accessToken,
      })

      return config
    },
    (error: AxiosError) => {
      return Promise.reject(error)
    }
  )

  /**
   * =========================
   * Response Interceptor
   * =========================
   */
  let isRefreshing = false
  let refreshPromise: Promise<string> | null = null

  client.interceptors.response.use(
    (response: AxiosResponse) => {
      console.log("📥 Response OK", response.config.url)
      return response
    },
    async (error: AxiosError) => {
      const status = error.response?.status
      const originalRequest = error.config as InternalAxiosRequestConfig & {
        _retry?: boolean
      }

      // Example: future refresh-token logic placeholder
      if (status === 401 && !originalRequest._retry) {
        originalRequest._retry = true
        console.warn("🔁 401 detected (refresh flow can be added here)")
        client.interceptors.response.use(
            (response) => response,

            async (error) => {
              const originalRequest = error.config

              if (
                error.response?.status !== 401 ||
                originalRequest._retry
              ) {
                return Promise.reject(error)
              }

              originalRequest._retry = true

              if (!isRefreshing) {
                isRefreshing = true

                refreshPromise = refreshTokenApi()
                  .then((res: RefreshResponse) => {
                    useAuthStore.getState().setAuth({
                      accessToken: res.access_Token,
                      refreshToken: res.refresh_Token,
                    })

                    return res.access_Token
                  })
                  .catch(() => {
                    useAuthStore.getState().clearAuth()
                    window.location.href = "/login"
                    throw error
                  })
                  .finally(() => {
                    isRefreshing = false
                    refreshPromise = null
                  })
              }

              const newAccessToken = await refreshPromise

              originalRequest.headers.Authorization =
                `Bearer ${newAccessToken}`

              return apiClient(originalRequest)
            }
          )

      }

      return Promise.reject(error)
    }
  )
}
