import { apiClient } from "./apiClient"

export interface RefreshTokenPayload {
  refresh_Token: string
}

export interface RefreshTokenResponse {
  access_Token: string
  refresh_Token: string
}

export const tokenService = {
  refreshToken: (payload: RefreshTokenPayload) =>
    apiClient.post<RefreshTokenResponse>(
      "/api/Token/refreshToken",
      payload
    ),

  revokeToken: (token: string) =>
    apiClient.post("/api/Token/revokeToken", { token }),
}
