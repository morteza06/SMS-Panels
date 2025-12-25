"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuthStore } from "../store/auth.store"
import { authorizeApi } from "../api/authorize.api"

export const useAuthGuard = () => {
  const router = useRouter()
  const { isAuthenticated } = useAuthStore()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const check = async () => {
      if (!isAuthenticated) {
        router.replace("/login")
        return
      }

      try {
        const res = await authorizeApi()

        if (!res.data.isAuthorized) {
          router.replace("/login")
        }
      } catch {
        router.replace("/login")
      } finally {
        setLoading(false)
      }
    }

    check()
  }, [isAuthenticated, router])

  return { loading }
}
