// src/features/identity/hooks/useRoleGuard.ts
"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

// نوع تابع authorize: Promise<void> یعنی async بدون مقدار برگشتی
type RoleGuardFn = () => Promise<void>

export const useRoleGuard = (
  authorizeFn: RoleGuardFn,
  redirectTo = "/dashboard"
) => {
  const router = useRouter()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkRole = async () => {
      try {
        await authorizeFn()
      } catch {
        router.replace(redirectTo)
      } finally {
        setLoading(false)
      }
    }

    checkRole()
  }, [authorizeFn, redirectTo, router])

  return { loading }
}
