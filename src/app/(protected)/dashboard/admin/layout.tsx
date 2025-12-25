"use client"

import { useRoleGuard } from "@/features/identity/hooks/useRoleGuard"
import { authorizeAdmin } from "@/features/identity/api/authorize-role.api"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // wrapper برای تبدیل نوع
  const { loading } = useRoleGuard(async () => {
    await authorizeAdmin() // برگشت AxiosResponse
    return // void
  })

  if (loading) return <div>Checking admin access...</div>

  return <>{children}</>
}

