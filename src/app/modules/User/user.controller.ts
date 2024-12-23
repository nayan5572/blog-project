import { HttpStatus } from "http-status-ts";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserService } from "./user.service";

// create user
const createUser = catchAsync(async (req, res) => {
  // creating a schema validation using zod
  const { user: userData } = req.body;

  const result = await UserService.createAdminIntoDB(userData);
  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: "User Create is Successfully",
    data: result,
  });
});

// create admin
const createAdmin = catchAsync(async (req, res) => {
  const { admin: adminData } = req.body;

  const result = await UserService.createAdminIntoDB(adminData);

  sendResponse(res, {
    statusCode: HttpStatus.OK,
    success: true,
    message: "Admin create is succesfully",
    data: result,
  });
});

export const UserController = {
  createUser,
  createAdmin,
};
