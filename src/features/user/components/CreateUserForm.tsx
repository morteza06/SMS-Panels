"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createUserSchema } from "../schemas/user.schema"
import { CreateUserDto } from "../types"
import { useCreateUser } from "../hooks/useCreateUser"

export function CreateUserForm() {
  const { mutate, isPending, error, isSuccess } = useCreateUser()

  const form = useForm<CreateUserDto>({
  resolver: zodResolver(createUserSchema),
  defaultValues: {
    acceptTerms: false, // ⬅️ مهم
        },
    })

  const onSubmit = (data: CreateUserDto) => {
        mutate(data, {
        onSuccess: () => {
        alert("ثبت‌نام موفق"); // یا redirect
        },
        onError: (err: any) => {
        alert("خطا: " + err.message)
        },
    })
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} style={{ maxWidth: 400 }}>
      <input placeholder="نام" {...form.register("name")} />
      <input placeholder="نام خانوادگی" {...form.register("lastName")} />
      <input placeholder="موبایل" {...form.register("mobile")} />
      <input placeholder="کد ملی" {...form.register("nId")} />
      <input type="password" placeholder="رمز عبور" {...form.register("password")} />
      <input
        type="password"
        placeholder="تکرار رمز عبور"
        {...form.register("confirmPassword")}
      />
        <div className="flex flex-col gap-4">
            <label>
                <input type="checkbox" {...form.register("acceptTerms")} />
                قوانین را می‌پذیرم
            </label>
            <br/>
            <button className="button text-blue-600" type="submit" disabled={isPending}>
                ثبت‌نام
            </button>
            <br />

            {error && <p className="text-red-600">خطا در ثبت‌نام</p>}
            {isSuccess && <p className="text-green-700">ثبت‌نام موفق</p>}
        </div>
        {form.formState.errors.confirmPassword && (
            <p className="text-red-600">
                {form.formState.errors.confirmPassword.message}
            </p>
        )}
    </form>
 

  )
}
