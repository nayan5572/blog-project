import { z } from "zod";

const blogUpdateValidationSchema = z.object({
  body: z.object({
    author: z.string().optional(),
    title: z.string().optional(),
    content: z.string().optional(),
  }),
});

export default blogUpdateValidationSchema;
