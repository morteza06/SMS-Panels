import { apiClient } from "@/lib/http/apiClient";
import { LoginDto } from "../types";

export const identityApi ={
    login: (data: LoginDto) =>
        apiClient("/api/Identity/Login",{
            method: "POST",
            body: JSON.stringify(data),
        })
}