import { NextFunction, Request, Response } from "express";
import CatchAsync from "../utils/CatchAsync";
import httpStatus from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import App__error from "../error/App__Error";
import { User } from "../modules/User/user.model";
import { ROLE__TYPE } from "../modules/User/user.roleType";

const auth = (...requiredRoles: ROLE__TYPE[]) => {
  return CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new App__error(httpStatus.UNAUTHORIZED, "You are not Authorized!");
    }
    const Bearertokens = token.split(" ")[1];
    const decoded = jwt.verify(
      Bearertokens,
      config.jwt__access__token__secret as string
    ) as JwtPayload;
    console.log("JWT ACCESS", decoded);
    const { role, id } = decoded;
    // Check if user exists
    const user = await User.findById(id);
    if (!user) {
      throw new App__error(httpStatus.NOT_FOUND, "User Not Found.");
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new App__error(httpStatus.UNAUTHORIZED, "You Are Not Authorized!");
    }
    req.user = decoded;
    next();
  });
};

export default auth;
