'use client'
import Footer from "@/components/layout/landing/Footer";
import Header from "@/components/layout/landing/Header";

export default function LandingLayout({children } : { children: React.ReactNode}) {
    return(
        <div className="felx h-screen">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
