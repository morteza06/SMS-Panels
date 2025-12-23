'use client'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "../schemas/login.schema"
import { LoginDto } from "../types"
import { useLogin } from "../hooks/useLogin"

export function LoginForm(){
    const { mutate, isPending, error, isSuccess} = useLogin()

    const form = useForm<LoginDto>({
        resolver: zodResolver(loginSchema),
    })

    const onSubmit = (data: LoginDto) => {
        console.log("FORM DATA:", data)
        mutate(data)
    }

    return (
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <input className="border p-2" placeholder="نام کاربری" {...form.register("userName")} onChange={(e) => console.log("username:", e.target.value)}/>
            
            <input className="border p-2"  type="password" placeholder="رمز عبور" {...form.register("password")} onChange={(e) => console.log("username:", e.target.value)} />
            <br />
            <button type="submit" className="button" disabled={isPending}>
                ورود
            </button>

            {error && <p className="text-red-600">خطا در ورود</p>}
            {isSuccess && <p>ورود موفق</p>}

        </form>
    )
}