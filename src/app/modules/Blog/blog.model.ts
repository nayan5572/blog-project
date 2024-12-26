import { model, Schema } from "mongoose";
import { Tblog } from "./blog.interface";

const blogSchema = new Schema<Tblog>({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
});

// The model name should start with an uppercase letter to follow conventions
export const Blog = model<Tblog>("Blog", blogSchema);
