import { create } from "zustand"

interface AuthState {
  accessToken: string | null
  refreshToken: string | null
  roles?: string[]
  setAuth: (tokens: {
    accessToken: string
    refreshToken?: string
    roles?: string
  }) => void

  clearAuth: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  refreshToken: null,

    setAuth: ({ accessToken, refreshToken }) =>
        set({
        accessToken,
        refreshToken: refreshToken ?? null,
        }),

    clearAuth: () => {
        console.log("🔴 clearAuth called")
        set({
            accessToken: null,
            refreshToken: null,
        })
    },
}))
