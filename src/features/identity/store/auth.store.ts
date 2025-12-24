export interface AuthState {
  isAuthenticated: boolean
  userName: string | null
  fullName: string | null
  roles: string[] | null
}

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  userName: null,
  fullName: null,
  roles: null,
}
