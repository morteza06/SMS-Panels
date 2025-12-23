'use client'
import { LoginForm } from "@/features/identity/components/LoginForm";

export default function LoginPage(){
    return(
        <main className="p-40">
            <h1>ورود</h1>
            <LoginForm/>
        </main>
    )
}