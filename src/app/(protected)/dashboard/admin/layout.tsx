"use client"

import { useRoleGuard } from "@/features/identity/hooks/useRoleGuard"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // فقط نقش admin اجازه دارد
  useRoleGuard(["admin"])

  return (
    <div className="p-4">
      <h1>Admin Dashboard</h1>
      {children}
    </div>
  )
}
