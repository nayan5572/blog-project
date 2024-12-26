/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import CatchAsync from "../../utils/CatchAsync";
import sendResponce from "../../utils/SendResponce";
import { UserService } from "./user.service";
import httpStatus from "http-status";

const usersController = CatchAsync(async (req, res, _next) => {
  const result = await UserService.createUserService(req.body);
  sendResponce(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User registered successfully",
    data: result,
  });
});

export const userController = {
  usersController,
};
