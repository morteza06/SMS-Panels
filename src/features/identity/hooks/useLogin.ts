import { useMutation } from "@tanstack/react-query"
import { identityApi } from "../api/identity.api"
import { LoginDto } from "../types"

export function useLogin(){
    return useMutation({
        mutationFn: (data: LoginDto) => identityApi.login(data),
    })
}