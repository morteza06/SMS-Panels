export interface LoginResponse {
    access_Token: string
    refresh_Token: string
    roles?: string[]
    userName?: string[]
    fullName?: string[]
    isAuthSuccessful?: boolean
    errorMessage: string | null
}
