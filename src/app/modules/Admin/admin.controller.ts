/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { AdminService } from "./admin.service";
import sendResponse from "../../utils/sendResponse";
import { HttpStatus } from "http-status-ts";

// user block
const blockUserController = catchAsync(
  // eslint-disable-next-line no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await AdminService.blockUserService(req.params.id);
    sendResponse(res, {
      statusCode: HttpStatus.OK,
      success: true,
      message: "User Blocked Successfully",
      data: result,
    });
  }
);

// delete user block
const deleteUserBlockController = catchAsync(
  // eslint-disable-next-line no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await AdminService.deleteUserBlogServices(req.params.id);
    sendResponse(res, {
      statusCode: HttpStatus.OK,
      success: true,
      message: "Blog deleted successfully",
      data: result,
    });
  }
);

export const AdminController = {
  blockUserController,
  deleteUserBlockController,
};
