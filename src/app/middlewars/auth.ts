/* eslint-disable @typescript-eslint/no-unused-vars */
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import CatchAsync from "../utils/CatchAsync";
import { ROLE__TYPE } from "../modules/User/user.roleType";
import App__error from "../error/App__Error";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

// eslint-disable-next-line no-unused-vars
const auth = (...requiredRole: ROLE__TYPE[]) => {
  return CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const Bearertoken = req.headers.authorization;

    if (!Bearertoken) {
      throw new App__error(httpStatus.UNAUTHORIZED, "Unauthorized");
    }
    const token = Bearertoken.split(" ")[1];

    jwt.verify(
      token,
      config.jwt__access__token__secret as string,
      function (err, decoded) {
        // if (err) {
        //   throw new App__error(HttpStatus.UNAUTHORIZED, "Authorized");
        // }
        const decodedValue = (decoded as JwtPayload)?.role;
        console.log("decoded Value", decodedValue);
        // if (requiredRole && !requiredRole.includes(decodedValue)) {
        //   throw new App__error(HttpStatus.UNAUTHORIZED, "Unauthorized");
        // }
        req.user = decoded as JwtPayload;
        next();
      }
    );
  });
};

export default auth;
