import { apiClient } from "./apiClient"

export interface RefreshTokenResponse {
    access_Token : string
    refresh_Token : string
}

export const refreshTokenApi = (refreshToken: string ) =>
  apiClient.post<RefreshTokenResponse>(
    "/api/Token/refreshToken",
    { refresh_Token: refreshToken},
    { withCredentials: true}
)

export const revokeTokenApi = (token: string) =>
  apiClient.post(
    "/api/Token/revokeToken", 
    { token },
    { withCredentials: true }
)
