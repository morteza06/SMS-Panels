import { apiClient } from "@/lib/http/apiClient"

export interface RefreshResponse {
  access_Token: string
  refresh_Token: string
}

export const refreshTokenApi = async (): Promise<RefreshResponse> => {
  const res = await apiClient.post("/api/Token/RefreshToken")
  return res.data
}
