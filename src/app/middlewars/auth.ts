import { NextFunction, Request, Response } from "express";
// import { JwtPayload } from "jsonwebtoken";

declare module "express-serve-static-core" {
  interface Request {
    user?: JwtPayload;
  }
}
import config from "../config";
import { HttpStatus } from "http-status-ts";
import App__error from "../error/App__Error";
import { JwtPayload } from "jsonwebtoken";
import CatchAsync from "../utils/CatchAsync";
import { ROLE__TYPE } from "../modules/User/user.roleType";
import jwt from "jsonwebtoken";

const auth = (...requiredRole: ROLE__TYPE[]) => {
  return CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new App__error(HttpStatus.UNAUTHORIZED, "you are not UnAuthorized");
    }
    jwt.verify(
      token,
      config.jwt__access__token__secret as string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function (err: any, decoded: any) {
        if (err) {
          throw new App__error(
            HttpStatus.UNAUTHORIZED,
            "You are not Authorized"
          );
        }
        const decodedValue = (decoded as JwtPayload)?.role;
        if (requiredRole && !requiredRole.includes(decodedValue)) {
          throw new App__error(
            HttpStatus.UNAUTHORIZED,
            "You are not unAuthorized"
          );
        }
        req.user = decoded as JwtPayload;
        next();
      }
    );
  });
};

export default auth;
