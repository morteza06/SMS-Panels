"use client"

import { useMutation } from "@tanstack/react-query"
import { identityApi } from "../api/identityApi"
import { useRouter } from "next/navigation"

export function useLogin() {
  const router = useRouter()

  return useMutation({
    mutationFn: identityApi.login,

    onSuccess: (data) => {
      console.log("LOGIN SUCCESS:", data)

      if (data.isAuthSuccessful) {
        // فعلاً ساده: ذخیره در cookie
        document.cookie = `access_token=${data.access_Token}; path=/`
        document.cookie = `refresh_token=${data.refresh_Token}; path=/`

        router.push("/dashboard")
      }
    },

    onError: (error) => {
      console.error("LOGIN FAILED:", error)
    },
  })
}
