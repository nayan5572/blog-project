/* eslint-disable no-unused-vars */
import httpStatus from "http-status";
import CatchAsync from "../../utils/CatchAsync";
import sendResponce from "../../utils/SendResponce";
import { blogService } from "./blog.service";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createBlogController = CatchAsync(async (req, res, next) => {
  const user = req.user;
  console.log("Create Blog", user);
  const result = await blogService.createBlogService(req.body, req?.user?.id);
  sendResponce(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Blog created successfully",
    data: result,
  });
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getAllBlogController = CatchAsync(async (req, res, next) => {
  const result = await blogService.getAllBlogService(req.query);
  sendResponce(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blogs fetched successfully",
    data: result,
  });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const updateBlogController = CatchAsync(async (req, res, next) => {
  const payload = req.body;
  const result = await blogService.updateBlogService(payload, req?.params.id);
  sendResponce(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog updated successfully",
    data: result,
  });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const deleteBlogController = CatchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await blogService.deleteBlogService(id);
  sendResponce(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog deleted successfully",
    data: result,
  });
});

export const blogController = {
  createBlogController,
  getAllBlogController,
  updateBlogController,
  deleteBlogController,
};
