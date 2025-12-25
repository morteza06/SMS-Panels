import { apiClient } from "@/lib/http/apiClient";


export const refreshTokenApi = (refresh_Token: string) => {
    return apiClient.post<{
        access_Token:string
        refresh_Token: string
    }>("/api/Token/refreshToken", { refresh_Token })
}

export const revokeTokenApi = (token: string) => {
    return apiClient.post("/api/Token/revokeToken", { token })
}