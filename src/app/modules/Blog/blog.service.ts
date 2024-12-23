import { HttpStatus } from "http-status-ts";
import AppError from "../../error/AppError";
import { User } from "../User/user.model";
import { TBlog } from "./blog.interface";
import { blogModel } from "./blog.model";
import QueryBuilder from "../../builder/QueryBuilder";

// create blog
const createBlogService = async (payload: TBlog) => {
  const isExistUser = await User.findById(payload.author);
  if (!isExistUser) {
    throw new AppError(
      HttpStatus.NOT_FOUND,
      "User not found. Please provide a valid user ID"
    );
  }
  const result = await blogModel.create(payload);
  return result;
};

// get all blog
const getAllBlogService = async (query: Record<string, unknown>) => {
  const allBlogs = new QueryBuilder(
    blogModel.find().populate({
      path: "author",
      select: "-password -isBlocked",
    }),
    query
  )
    .search(["title", "content"])
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await allBlogs.modelQuery;
  return result;
};

// update blog
const updateBlogService = async (id: string, payload: Partial<TBlog>) => {
  if (payload.author && !(await User.findById(payload.author))) {
    throw new AppError(HttpStatus.NOT_FOUND, "Invalid author ID");
  }

  const result = await blogModel.findByIdAndUpdate(id, payload, { new: true });
  if (!result) {
    throw new AppError(HttpStatus.NOT_FOUND, "Blog not found");
  }
  return result;
};

// delete blog Service
const deleteBlogService = async (id: string) => {
  const isBlogExist = await blogModel.findById(id);

  if (!isBlogExist) {
    throw new AppError(
      HttpStatus.NOT_FOUND,
      "Blog Not Found. Please Provide a Valid Blog ID."
    );
  }
  await blogModel.findByIdAndDelete(id);
};

export const blogService = {
  createBlogService,
  getAllBlogService,
  updateBlogService,
  deleteBlogService,
};
