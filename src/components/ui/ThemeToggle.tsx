"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun , FiMoon} from 'react-icons/fi';


const  ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [ mounted, setMounted] = useState(false);

    //اجازه رندر بده مونت فقط بعد از
    useEffect(() => {
        setMounted(true);
    },[]);
    
    if (!mounted){
        //جلوگیری از Hydration msimatch
        return null;
    }
    //اطمینان حاصل می کنیم که کامپوننت فقط پس از مونت شدن در سمت کلاینت نمایش داده شود 
    // این کار برای جلوگیری از عدم تطابق Next.js/SSR
    //مهم است 
    if (!theme) return null;
    //اگر تم سیستم باشد بررسی می کنیم که سیستم عامل در حال حاضر کدام ت م را ترجیح می دهد
    const resolvedTheme = theme ==='system' ? 'light' : theme;

    return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} 
            className="p-3 rounded-full transition-colors duration-300
                    bg-gray-200 text-gray-800
                    dark:bg-gray-700 dark:text-gray-200
                    hover:bg-gray-300 dark:hover:bg-gray-600 
                       "
            aria-label={`تغییر به تم ${resolvedTheme === 'dark' ? 'تیره' : 'روشن'}`}
            >
            {resolvedTheme === 'dark' ?(
                <FiSun className="h-6 w-6 text-yellow-500" />
            ) : (
                <FiMoon className="h-6 w-6 text-indigo-500" />
            )}
            </button>
    )
}

export default ThemeToggle;