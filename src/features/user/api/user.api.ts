import { apiClient } from "@/lib/http/apiClient"
import { CreateUserDto } from "../types"

export const userApi = {
  createUser: (data: CreateUserDto) =>
    apiClient("/api/User/CreateUser", {
      method: "POST",
      body: JSON.stringify(data),
    }),
}
