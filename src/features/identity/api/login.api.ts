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
  const { data } = await apiClient.post(
    "/api/Identity/Login",
    payload
  )

  return {
    ...data,
    accessToken: data.access_Token,
    refreshToken: data.refresh_Token,
  }
}