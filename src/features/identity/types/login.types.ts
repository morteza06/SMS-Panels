export interface LoginPayload {
  userName: string
  password: string
}

export interface LoginResponse {
  isAuthSuccessful: boolean
  errorMessage: string | null
  userName: string
  fullName: string
  access_Token: string
  refresh_Token: string
  roles: string[] | null
}
