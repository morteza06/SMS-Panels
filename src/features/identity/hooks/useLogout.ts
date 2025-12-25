import Cookies from "js-cookie"
import { revokeTokenApi } from "../api/token.api"
import { useAuthStore } from "../store/auth.store"

export const useLogout = () => {
  const clearAuth = useAuthStore((s) => s.clearAuth)

  return async () => {
    const token = Cookies.get("access_token")
    if (token) {
      try {
        await revokeTokenApi(token)
      } catch {}
    }

    clearAuth()
    Cookies.remove("access_token")
    Cookies.remove("refresh_token")
    window.location.href = "/login"
  }
}
