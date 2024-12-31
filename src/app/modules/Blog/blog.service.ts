import QueryBuilder from "../../builder/QueryBuilder";
import { Tblog } from "./blog.interface";
import { User } from "../User/user.model";
import App__error from "../../error/App__Error";
import { Blog } from "./blog.model";
import httpStatus from "http-status";

const createBlogService = async (payload: Tblog) => {
  const isExistUser = await User.findById(payload.author);
  if (!isExistUser) {
    throw new App__error(
      httpStatus.NOT_FOUND,
      "User not found. Please provide a valid user ID."
    );
  }
  const result = await Blog.create(payload);
  return result;
};

const getAllBlogService = async (query: Record<string, unknown>) => {
  const allBlogs = new QueryBuilder(
    Blog.find().populate({
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
const updateBlogService = async (id: string, payload: Partial<Tblog>) => {
  // const isExistUser = await User.findById(payload.author)
  // if(!isExistUser){
  //     throw new App__error(httpStatus.NOT_FOUND,'User not found. Please provide a valid user ID.')
  // }
  const result = await Blog.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteBlogService = async (id: string) => {
  const isBlogExist = await Blog.findById(id);

  if (!isBlogExist) {
    throw new App__error(
      httpStatus.NOT_FOUND,
      "Blog not found. Please provide a valid Blog ID."
    );
  }
  await Blog.findByIdAndDelete(id);
};

export const blogService = {
  createBlogService,
  getAllBlogService,
  updateBlogService,
  deleteBlogService,
};
