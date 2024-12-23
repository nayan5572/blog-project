import { ROLE } from "../modules/User/user.constant";
import { NextFunction, Request, Response } from "express";
import AppError from "../error/AppError";
import { HttpStatus } from "http-status-ts";
import catchAsync from "../utils/catchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";

const auth = (...requiredRole: ROLE[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(HttpStatus.UNAUTHORIZED, "You are not UnAuthorized");
    }
    jwt.verify(
      token,
      config.jwt_access_secret as string,
      function (err, decoded) {
        if (err) {
          throw new AppError(HttpStatus.UNAUTHORIZED, "you are not authorized");
        }
        const decodeValue = (decoded as JwtPayload)?.role;
        if (requiredRole && !requiredRole.includes(decodeValue)) {
          throw new AppError(HttpStatus.UNAUTHORIZED, "you are not authorized");
        }
        req.user = decoded as JwtPayload;
        next();
      }
    );
  });
};

export default auth;
