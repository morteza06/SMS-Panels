'use client'
import Sidebar from '@/components/layout/dashboard/Sidebar'
import Header from  '@/components/layout/dashboard/Header'
import { useEffect } from 'react'
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/features/identity/store/auth.store"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const accessToken = useAuthStore((s) => s.accessToken)

  useEffect(() => {
    if (!accessToken) {
      router.replace("/login")
    }
  }, [accessToken, router])

  if (!accessToken) return <div>Loading...</div>


  return (   
    <>
      <Header /> 
      <Sidebar />
      <main className="p-4">{children}</main>
      {/* <Footer /> */}
    </>
  )
}
