'use client'
import ThemeToggle from '@/components/ui/ThemeToggle';
import Link from 'next/link';
import { useState } from 'react';

export default function Header (){
    const [open, setOpen] = useState(false);
    return(
        <header className="flex flex-col md:flex-row items-center justify-between px-4 py-3 gap-4">
            {/* Logo */}
                <Link href="/" className="main-title md:text-xl">
                سامانه پیامک انبوه
                </Link>
                <br/>
         
                <nav className='md:felx gap-3'>
                    {/* {user ?  ( */}
                    <div className='flex gap-5'>
                        <span><Link 
                            href="/dashboard"
                            className='px-4 py-2 bg-green-600 text-white rounded'
                            >
                                ورود به داشبورد
                            </Link> 
                        </span>
                    
                        
                    {/* ) : ( */}
                    
                        <span>
                            <Link 
                                href="/register"
                                className='px-4 py-2 bg-blue-600 text-white rounded'
                                >
                                ثبت نام
                            </Link> 
                        </span>
                        <span>
                            <Link 
                                href="/login"
                                className='px-4 py-2 bg-green-600 text-white rounded'
                                >
                                ورود
                            </Link> 
                        </span>
                    </div>
                       

                    {/* )} */}
             
                
            {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>

            {/* Mobile Menu className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-white border-t" */}
                {open && (
                    <ul>
                        <li>
                        <a href="#features" className="hover:text-indigo-600">ویژگی‌ها</a>
                        </li>
                        <li>
                        <a href="#pricing" className="hover:text-indigo-600">تماس باما</a>
                        </li>
                        <li>
                        <a href="#contact" className="hover:text-indigo-600">قیمت ها</a>
                        </li>

                        <li><ThemeToggle/></li>
                    </ul> 
                )}
                </nav>  
        </header>
    )
}