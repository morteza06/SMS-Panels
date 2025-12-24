'use client'
import Sidebar from '@/components/layout/dashboard/Sidebar'
import Header from  '@/components/layout/dashboard/Header'


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
 

  return (   
    <>
      <Header /> 
      <Sidebar />
      <main className="p-4">{children}</main>
      {/* <Footer /> */}
    </>
  )
}
