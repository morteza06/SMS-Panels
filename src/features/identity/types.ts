export interface LoginDto {
    userName: string
    password: string
}


export interface LoginResponse {
  accessToken: string
  refreshToken?: string
  // سایر فیلدهای backend اگر لازم بود
}
