http

export const createUser = (data: any) =>
    http.post("/api/User/CreateUser", data)

export const verifyMobile = (mobile: string) =>
    http.get("/api/User/VerifyMobile", { params:{ mobile }})

export const verifyNid = (nid: string) =>
    http.get("/api/User/VerifyNid", {params: {nid}})