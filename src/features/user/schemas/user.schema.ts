import {z} from "zod"

export const createUserSchema = z.object({
    name:z.string().min(2),
    lastName:z.string().min(2),
    mobile:z.string().length(11),
    nId: z.string().length(10),
    password: z.string().min(6),
    confirmPassword:z.string().min(6),
    acceptTerms: z.literal(true),
}).refine(
    data => data.password === data.confirmPassword,
    {path:["confirmPassword"], message:"Passwords do not match"}
)