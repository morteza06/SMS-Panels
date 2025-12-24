"use client"

import { useLogin } from "@/features/identity/hooks/useLogin"

export default function LoginPage() {
  const { mutate, isPending } = useLogin()

  return (
    <button
      onClick={() =>
        mutate({ userName: "4557870259", password: "1234567" })
      }
       disabled={isPending}
    >
      Login Button with mutate
    </button>
  )
}
