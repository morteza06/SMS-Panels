import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"
import { loginApi } from "../api/login.api"
import { LoginPayload } from "../types/login.types"

export const useLogin = () => {
  return useMutation({
    mutationFn: (payload: LoginPayload) => loginApi(payload),

    onSuccess: (data) => {
      if (!data.isAuthSuccessful) {
        throw new Error(data.errorMessage ?? "Login failed")
      }

      // ذخیره توکن‌ها
      Cookies.set("access_token", data.access_Token)
      Cookies.set("refresh_token", data.refresh_Token)

      // اینجا بعداً store را update می‌کنیم
      console.log("Logged in:", data.userName)
    },
  })
}
