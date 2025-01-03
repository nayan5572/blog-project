import httpStatus from "http-status";
import { User } from "../User/user.model";
import App__error from "../../error/App__Error";
import { Blog } from "../blog/blog.model";

const blockUserService = async (id: string) => {
  const isExistUser = await User.findById(id);
  if (!isExistUser) {
    throw new App__error(httpStatus.NOT_FOUND, "user not found");
  }
  await User.findByIdAndUpdate(id, { isBlocked: true }, { new: true });
};

const deleteUserBlogService = async (id: string) => {
  await Blog.findByIdAndDelete(id);
};

export const AdminService = {
  blockUserService,
  deleteUserBlogService,
};
