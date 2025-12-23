export interface CreateUserDto {
  name: string;
  lastName: string;
  mobile: string;
  nId: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}
