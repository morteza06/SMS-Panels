import { z } from "zod"

export const createUserSchema = z.object({
  name: z.string().min(1, "نام الزامی است"),
  lastName: z.string().min(1, "نام خانوادگی الزامی است"),
  mobile: z.string().min(1, "موبایل الزامی است"),
  nId: z.string().min(1, "کد ملی الزامی است"),
  password: z.string().min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
  confirmPassword: z.string().min(6, "۰  (حداقل ۶ کاراکتر باشد(تکرار رمز عبور الزامی است"),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "قبول قوانین الزامی است",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "رمز عبور و تکرار آن باید یکسان باشند",
  path: ["confirmPassword"], // خطا را روی confirmPassword نمایش می‌دهد
})
    