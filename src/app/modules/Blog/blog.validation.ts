import { z } from "zod";

// Define the blog schema
const blogSchema = z.object({
  body: z.object({
    title: z.string().nonempty("Title is required"),
    content: z.string().nonempty("Content is required"),
  }),
});

export default blogSchema;
