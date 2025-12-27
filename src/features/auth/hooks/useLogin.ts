import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"

import { identityApi } from "../api/identityApi"
import { useAuthStore } from "@/features/auth/store/auth.store"

/**
 * useLogin
 * --------
 * - لاگین کاربر
 * - ذخیره session در Auth Store
 * - ذخیره token در Cookie برای Proxy
 */
export function useLogin() {
  const setAuth = useAuthStore((state) => state.setAuth)

  return useMutation({
    mutationFn: identityApi.login,

    onSuccess: (response) => {
      const data = response.data

      if (!data.isAuthSuccessful) return

      Cookies.set("access_token", data.access_Token, { path: "/" })
      Cookies.set("refresh_token", data.refresh_Token, { path: "/" })

      setAuth({
        accessToken: data.access_Token,
        refreshToken: data.refresh_Token,
        roles: response.roles || []
      })
    }
  })
}
