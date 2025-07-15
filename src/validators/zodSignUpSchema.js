import {z} from "zod";

export const zodSignUpSchema = z.object({
    username: z.string().min(1),
    email : z.string().email(),
    password: z.string().min(6),
    
});