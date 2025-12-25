import { apiClient } from "@/lib/http/apiClient"

export interface AuthorizeResponse {
  isAuthorized: boolean
}

export const authorizeApi = () =>
  apiClient.get<AuthorizeResponse>("/api/User/AuthorizeMethod")
