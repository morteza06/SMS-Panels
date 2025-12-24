"use client"

import Cookies from "js-cookie"
import { useEffect } from "react"
import { useAuthStore } from "../store/auth.store"

export const useHydrateAuth = () => {
    const setAuth = useAuthStore((state) => state.setAuth)

    useEffect(() => {
        const accessToken = Cookies.get("access_token")
        const refreshToken = Cookies.get("refresh_token")

        if(accessToken && refreshToken) {
            setAuth({
                accessToken,
                refreshToken,
                isAuthenticated: true,
            })
        }
    }, [setAuth])
}