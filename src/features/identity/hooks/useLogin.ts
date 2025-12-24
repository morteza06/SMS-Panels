import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"
import { loginApi } from "../api/login.api"
import { LoginPayload } from "../types/login.types"
import { useAuthStore } from "../store/auth.store"

export const useLogin = () => {
  const setAuth = useAuthStore((s) => s.setAuth)

  return useMutation({
    mutationFn: (payload: LoginPayload) => loginApi(payload),

    onSuccess: (data) => {
      if (!data.isAuthSuccessful) {
        throw new Error(data.errorMessage ?? "Login failed")
      }

      // ذخیره توکن‌ها
      Cookies.set("access_token", data.access_Token)
      Cookies.set("refresh_token", data.refresh_Token)

      console.log("Logged in:", data.userName)
      // اینجا بعداً store را update می‌کنیم

      setAuth({
        userName: data.userName,
        fullName: data.fullName,
        roles: data.roles,
        accessToken: data.access_Token,
        refreshToken: data.refresh_Token,
      })
    },
  })
}
