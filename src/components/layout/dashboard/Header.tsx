'use client'

import Link from 'next/link';

export default function Header (){
    
    return(
        <header className="flex flex-col md:flex-row items-center justify-between px-4 py-3 gap-4">
     
                <h1>Dashboard</h1>
                <Link href="/" className="main-title md:text-xl">
                سامانه پیامک انبوه
                </Link>
                <br/>
                
        </header>
    )
}