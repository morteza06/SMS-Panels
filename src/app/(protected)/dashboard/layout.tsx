'use client'
import Sidebar from '@/components/layout/dashboard/Sidebar'
import Header from  '@/components/layout/dashboard/Header'
import { useAuthGuard } from '@/features/identity/hooks/useAuthGuard'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

 const { loading } = useAuthGuard()

  if (loading) {
    return <div>Checking authorization...</div>
  }

  return (   
    <>
      <Header /> 
      <Sidebar />
      <main className="p-4">{children}</main>
      {/* <Footer /> */}
    </>
  )
}
