//(axios-based)
import { apiClient } from "@/lib/http/apiClient"

export const userService = {
  getUsers: () => apiClient.get("/api/User/GetUsers"),
}
