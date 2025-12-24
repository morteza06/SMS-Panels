
import { apiClient } from "@/lib/http/apiClient"
import { LoginDto } from "../types"


export const identityApi = {
  login: async (data: LoginDto) => {
    const res = await apiClient.post("/identity/login", data)
    return res.data
  },
}
