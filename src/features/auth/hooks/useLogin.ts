import { useMutation } from "@tanstack/react-query"
import { identityApi } from "@/features/identity/api/identity.api"
import { LoginDto } from "@/features/identity/types"
import { setCookie } from "nookies"  // نصب با npm install nookies

export function useLogin() {
  return useMutation({
    mutationFn: async (data: LoginDto) => {
      const res = await identityApi.login(data)
      if (res.accessToken) {
        // ذخیره توکن در cookie
        setCookie(null, "access_token", res.accessToken, {
          maxAge: 60 * 60 * 24, // 1 روز
          path: "/",
        })
        setCookie(null, "role", res.role, { maxAge: 86400, path: "/" }) 
      }
      return res
    },
  })
}
