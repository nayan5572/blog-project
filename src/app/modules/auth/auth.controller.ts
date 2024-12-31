/* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable no-unused-vars */
// import CatchAsync from "../../utils/CatchAsync";
// import config from "../../config";
// import { authService } from "./auth.service";
// import sendResponce from "../../utils/SendResponce";
// import { NextFunction, Request, Response } from "express";
// import httpStatus from "http-status";

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const loginController = CatchAsync(
//   async (req: Request, res: Response, next: NextFunction) => {
//     const result = await authService.loginService(req.body);
//     const { accessToken, refreshToken } = result;
//     res.cookie("refreshToken", refreshToken, {
//       secure: config.node__env === "production",
//       httpOnly: true,
//     });
//     sendResponce(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: "Login successful",
//       data: { token: accessToken },
//     });
//   }
// );

// export const AuthController = {
//   loginController,
// };

import { Request, Response, NextFunction } from "express";
import CatchAsync from "../../utils/CatchAsync";
import sendResponce from "../../utils/SendResponce";
import { authService } from "./auth.service";
import httpStatus from "http-status";
import config from "../../config";

const loginController = CatchAsync(
  // eslint-disable-next-line no-unused-vars
  async (req: Request, res: Response, next: NextFunction) => {
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
      data: { token: accessToken },
    });
  }
);

export const AuthController = {
  loginController,
};
