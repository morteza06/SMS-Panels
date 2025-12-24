import { create } from "zustand"

interface AuthState {
    isAuthenticated: boolean
    userName: string | null
    fullName: string | null
    roles: string[] | null
    accessToken: string | null
    refreshToken: string | null

    setAuth: (data: Partial<AuthState>) => void
    logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    isAuthenticated: false,
    userName: null,
    fullName: null,
    roles: null,
    accessToken: null,
    refreshToken: null,

    setAuth: (data) =>
        set({
        ...data,
        isAuthenticated: true,
        }),

    logout: () =>
        set({
        isAuthenticated: false,
        userName: null,
        fullName: null,
        roles: null,
        accessToken: null,
        refreshToken: null,
        }),
}))