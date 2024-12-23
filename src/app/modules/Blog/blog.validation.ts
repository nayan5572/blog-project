import { z } from "zod";

const blogValidation = z.object({
  body: z.object({
    title: z.string(),
    content: z.string(),
    author: z.string(),
  }),
});

export default blogValidation;
