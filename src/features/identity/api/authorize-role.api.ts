import { apiClient } from "@/lib/http/apiClient"

export const authorizeAdmin = () =>
  apiClient.get("/api/User/AuthorizeMethodForAdminRole")

export const authorizeOperator = () =>
  apiClient.get("/api/User/AuthorizeMethodForOperatorRole")

export const authorizeAdminOrOperator = () =>
  apiClient.get("/api/User/AuthorizeMethodForAdminAndOperatorRole")
