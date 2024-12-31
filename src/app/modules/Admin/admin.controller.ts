/* eslint-disable no-unused-vars */
import httpStatus from "http-status";
import CatchAsync from "../../utils/CatchAsync";
import sendResponce from "../../utils/SendResponce";
import { AdminService } from "./admin.service";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const blockUserController = CatchAsync(async (req, res, next) => {
  const result = await AdminService.blockUserService(req.params.id);
  sendResponce(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User blocked successfully",
    data: result,
  });
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const deleteUserBlogController = CatchAsync(async (req, res, next) => {
  const result = await AdminService.deleteUserBlogService(req.params.id);
  sendResponce(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog deleted successfully",
    data: result,
  });
});

export const AdminController = {
  blockUserController,
  deleteUserBlogController,
};
