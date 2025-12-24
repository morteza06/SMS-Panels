import { apiClient } from "@/lib/http/apiClient"
import { LoginPayload, LoginResponse } from "../types/login.types"

/**
 * Identity API
 * ------------
 * فقط مسئول ارتباط با Identity Controller بک‌اند
 * هیچ منطق session یا auth اینجا نیست
 */

export const loginApi = async (
  payload: LoginPayload
): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>(
    "/api/Identity/Login",
    payload
  )

  return response.data
}
