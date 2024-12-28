import { model, Schema } from "mongoose";
import { Tblog } from "./blog.interface";

const blogSchema = new Schema<Tblog>(
  {
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
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Blog = model<Tblog>("blog", blogSchema);
