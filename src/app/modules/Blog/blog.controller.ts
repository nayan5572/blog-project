/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { blogService } from "./blog.service";
import sendResponse from "../../utils/sendResponse";
import { HttpStatus } from "http-status-ts";

// create blog
const createBlog = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await blogService.createBlogService(req.body);
    sendResponse(res, {
      statusCode: HttpStatus.CREATED,
      success: true,
      message: "Blog Created Successfully",
      data: result,
    });
  }
);

// get all blogs
const getAllBlog = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const result = await blogService.getAllBlogService(req.body);
    sendResponse(res, {
      statusCode: HttpStatus.OK,
      success: true,
      message: "Blogs fetched successfully",
      data: result,
    });
  }
);

// update blog
const updateBlog = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const payload = req.body;
    const result = await blogService.updateBlogService(id, payload);
    sendResponse(res, {
      statusCode: HttpStatus.OK,
      success: true,
      message: "Blog Update Successfully",
      data: result,
    });
  }
);

// delete blog
const deleteBlog = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const result = await blogService.deleteBlogService(id);
    sendResponse(res, {
      statusCode: HttpStatus.OK,
      success: true,
      message: "Blog deleted successfully",
      data: result,
    });
  }
);

export const blogController = {
  createBlog,
  getAllBlog,
  updateBlog,
  deleteBlog,
};
