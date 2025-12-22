'use client'
import Sidebar from "@/components/layout/dashboard/Sidebar"
export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  return (   
    <div className="flex h-screen">
      <Sidebar/>
      <div className="flex-1">
        {/* <DashboardHeader /> */}
        <main className="p-4">{children}</main>
      </div>
    </div>
  )
}
