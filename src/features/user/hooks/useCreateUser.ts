import { useMutation } from "@tanstack/react-query";
import { userApi } from "../api/user.api";
import { CreateUserDto } from "../types";

export function useCreateUser() {
  return useMutation({
    mutationFn: (data: CreateUserDto) =>
      userApi.createUser(data),
  });
}
