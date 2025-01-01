import { z } from "zod";

const blogSchema = z.object({
  body: z.object({
    title: z.string(),
    content: z.string(),
  }),
});

export default blogSchema;
