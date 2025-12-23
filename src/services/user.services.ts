//Bussiness API

import { proxyFetch } from "@/lib/http/apiClient";

export const createUser = (data: any) =>
  proxyFetch("/users", {
    method: "POST",
    body: JSON.stringify(data),
  });
