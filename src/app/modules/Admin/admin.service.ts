import { HttpStatus } from "http-status-ts";
import AppError from "../../error/AppError";
import { User } from "../User/user.model";
import { blogModel } from "../Blog/blog.model";

const blockUserService = async (id: string) => {
  const isExistUser = await User.findById(id);
  if (!isExistUser) {
    throw new AppError(HttpStatus.NOT_FOUND, "User not found");
  }
  await User.findByIdAndUpdate(id, { isBlocked: true }, { new: true });
};

const deleteUserBlogServices = async (id: string) => {
  await blogModel.findByIdAndDelete(id);
};

export const AdminService = {
  blockUserService,
  deleteUserBlogServices,
};
