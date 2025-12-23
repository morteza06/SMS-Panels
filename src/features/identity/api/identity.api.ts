import { apiClient } from "@/lib/http/apiClient"
import { LoginDto, LoginResponse } from "../types"

export const identityApi = {
  login: (data: LoginDto) => apiClient<LoginResponse>("/api/Identity/Login", {
    method: "POST",
    body: JSON.stringify(data),
  }),
}
