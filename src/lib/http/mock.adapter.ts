import type {
  AxiosAdapter,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios"

export const mockAdapter: AxiosAdapter = async (
  config: InternalAxiosRequestConfig
): Promise<AxiosResponse> => {
  console.log("🟡 MOCK AXIOS REQUEST")
  console.log("URL:", config.url)
  console.log("METHOD:", config.method)
  console.log("HEADERS:", config.headers)

  if (config.url?.includes("/api/Auth/login")) {
    return {
      data: {
        isAuthSuccessful: true,
        userName: "admin",
        fullName: "Admin User",
        roles: ["Admin"],
        access_Token: "mock-access-token",
        refresh_Token: "mock-refresh-token",
      },
      status: 200,
      statusText: "OK",
      headers: {},
      config,
    }
  }

  return {
    data: null,
    status: 404,
    statusText: "Not Found",
    headers: {},
    config,
  }
}
