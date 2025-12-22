'use client'
// import Sidebar from './components/Sidebar'
// import Header from  './components/Header'
// import Footer from '../../../components/landing/Footer'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
 

  return (   
    <>
      {/* <Sidebar /> */}
      {/* <Header />  */}
      <main className="p-4">{children}</main>
      {/* <Footer /> */}
    </>
  )
}
