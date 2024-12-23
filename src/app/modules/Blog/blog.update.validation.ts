import { z } from "zod";

const blogUpdateValidation = z.object({
  body: z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    author: z.string().optional(),
  }),
});

export default blogUpdateValidation;
