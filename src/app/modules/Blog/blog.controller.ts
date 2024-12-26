import { HttpStatus } from "http-status-ts";
import CatchAsync from "../../utils/CatchAsync";
import sendResponce from "../../utils/SendResponce";
import { blogService } from "./blog.service";

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const createBlogController = CatchAsync(async (req, res, next) => {
  const result = await blogService.createBlogService(req.body);
  sendResponce(res, {
    statusCode: HttpStatus.CREATED,
    success: true,
    message: "Blog created successfully",
    data: result,
  });
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const getAllBlogController = CatchAsync(async (req, res, next) => {
  const result = await blogService.getAllBlogService(req.query);
  sendResponce(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: "Blogs fetched successfully",
    data: result,
  });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const updateBlogController = CatchAsync(async (req, res, next) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await blogService.updateBlogService(id, payload);
  sendResponce(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: "Blog updated successfully",
    data: result,
  });
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const deleteBlogController = CatchAsync(async (req, res, next) => {
  const id = req.params.id;
  const result = await blogService.deleteBlogService(id);
  sendResponce(res, {
    statusCode: HttpStatus.OK,
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
