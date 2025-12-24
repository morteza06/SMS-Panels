import {create} from "zustand"

export interface AuthState {
  isAuthenticated: boolean
  userName: string | null
  fullName: string | null
  roles: string[] | null
  accessToken: string | null
  refreshToken: string | null

  setAuth: (auth: Partial<AuthState>) => void
  clearAuth: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  userName: null,
  fullName: null,
  roles: null,
  accessToken: null,
  refreshToken: null,

  setAuth: (auth) => 
    set((state) => ({ 
      ...state, 
      ...auth, 
      isAuthenticated: true 
    })),
    
  clearAuth: () =>
    set({
      isAuthenticated: false,
      userName: null,
      fullName: null,
      roles: null,
      accessToken: null,
      refreshToken: null,
    }),
}))
