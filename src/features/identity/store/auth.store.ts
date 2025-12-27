import { create } from "zustand"

export interface AuthState {
  accessToken: string | null
  refreshToken: string | null
  roles?: string[]
  isAuthenticated: boolean

  setAuth: (tokens: {
    accessToken: string
    refreshToken?: string
  }) => void

  logout: () => void
  clearAuth:() => void
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  refreshToken: null,
  roles: [],
  isAuthenticated: false,

  setAuth: ({ accessToken, refreshToken }) => {
    console.log("🟢 setAuth called", { accessToken, refreshToken })

    set({
      accessToken,
      refreshToken: refreshToken ?? null,
      isAuthenticated: true,
    })
  },

  logout: () => {
    console.log("🔴 logout called")

    set({
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
    })
  },
  clearAuth: () => {
    console.log("🔴 clearAuth called")
    set({
      accessToken: null,
      refreshToken: null,
    })
},

}))
