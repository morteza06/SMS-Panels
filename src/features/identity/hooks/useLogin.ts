import { useMutation } from "@tanstack/react-query"
import { loginApi } from "../api/login.api"
import { useAuthStore } from "../store/auth.store"
import type { LoginPayload, LoginResponse } from "../types/login.types"

export const useLogin = () => {
  const setAuth = useAuthStore((s) => s.setAuth)

  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: loginApi,

    onSuccess: (response) => {
      console.log("LOGIN SUCCESS:", response)

      setAuth({
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
      })
    },
  })
}
