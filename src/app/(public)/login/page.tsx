"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useLogin } from "@/features/identity/hooks/useLogin"

export default function LoginPage() {
  
  const router = useRouter()
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const { mutate , isPending} =  useLogin ()

  const handleLogin = () => {
      mutate({
        userName: userName,
        password: password,
      },{
        onSuccess: () => {
        router.replace("/dashboard")
      },
      }
    )
  }
  
  return (
    <div
      
      >
      <h1>ورود به حساب کاربری</h1>
      <form 
        onSubmit={(e) => {
          e.preventDefault()
          handleLogin()
        }} className="flex flex-col border-0 gap-3">
          نام کاربری:
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="border-b-fuchsia-500 border-2 "
          />
          مرز عبور:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-b-fuchsia-500 border-2"
          />

          <button className="button bg-blue-800" onClick={handleLogin} disabled={isPending}>
              ورود  
          </button>

        </form>
    </div>
  )
    

}
