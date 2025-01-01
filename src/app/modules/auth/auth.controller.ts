/* eslint-disable no-unused-vars */
import httpStatus from "http-status";
import CatchAsync from "../../utils/CatchAsync";
import sendResponce from "../../utils/SendResponce";
import config from "../../config";
import { authService } from "./auth.service";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const loginController = CatchAsync(async (req, res, next) => {
  const result = await authService.loginService(req.body);
  const { accessToken, refreshToken } = result;
  res.cookie("refreshToken", refreshToken, {
    secure: config.node__env === "production",
    httpOnly: true,
  });
  sendResponce(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Login successful",
    data: {
      token: accessToken,
    },
  });
});

export const AuthController = {
  loginController,
};
