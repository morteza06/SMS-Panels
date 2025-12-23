import { useMutation } from "@tanstack/react-query"
import { identityApi } from "../api/identity.api"
import { LoginDto, LoginResponse } from "../types"
import { setCookie } from "nookies"

export function useLogin() {
  return useMutation<LoginResponse, Error, LoginDto>({
    mutationFn: async (data: LoginDto) => {
      const res = await identityApi.login(data)
      if (res.accessToken) {
        setCookie(null, "access_token", res.accessToken, {
          maxAge: 60 * 60 * 24,
          path: "/",
        })
      }
      return res
    },
  })
}
