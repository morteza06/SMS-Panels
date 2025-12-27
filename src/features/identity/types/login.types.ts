export interface LoginPayload {
  userName: string
  password: string
}

export interface LoginResponse {
  isAuthSuccessful: boolean
  errorMessage: string | null
  userName: string
  fullName: string
  accessToken: string
  refreshToken: string
  roles: string[] | null
}
