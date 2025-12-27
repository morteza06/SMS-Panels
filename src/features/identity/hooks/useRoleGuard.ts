import { useAuthStore } from "@/features/identity/store/auth.store"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export const useRoleGuard = (requiredRoles: string[]) => {
  const auth = useAuthStore(state => state)
  const router = useRouter()

  useEffect(() => {
    if (!auth.accessToken) {
      router.replace("/login")
      return
    }

    if (requiredRoles.length && !requiredRoles.some(role => auth.roles?.includes(role))) {
      router.replace("/unauthorized") // صفحه ارور یا ریدایرکت دلخواه
    }
  }, [auth, router, requiredRoles])
}
