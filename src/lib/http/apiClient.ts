import axios from "axios"

/**
 * apiClient
 * ----------
 * هسته ارتباط با بک‌اند
 * - تمام درخواست‌ها از اینجا عبور می‌کنند
 * - آماده برای interceptor و refresh token در آینده
 */
export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: false, // برای ارسال cookie (access / refresh)
})

/**
 * Response Interceptor
 * --------------------
 * فعلاً فقط خطا را پاس می‌دهیم
 * در قدم بعدی اینجا refresh token اضافه می‌شود
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // اگر 401 شد، فعلاً لاگ می‌کنیم
    if (error.response?.status === 401) {
      console.warn("Unauthorized - token may be expired")
    }

    return Promise.reject(error)
  }
)
