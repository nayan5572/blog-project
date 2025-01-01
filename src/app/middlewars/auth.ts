// /* eslint-disable @typescript-eslint/no-unused-vars */
// import jwt, { JwtPayload } from "jsonwebtoken";
// import config from "../config";
// import CatchAsync from "../utils/CatchAsync";
// import { ROLE__TYPE } from "../modules/User/user.roleType";
// import App__error from "../error/App__Error";
// import { NextFunction, Request, Response } from "express";
// import httpStatus from "http-status";

// // eslint-disable-next-line no-unused-vars
// const auth = (...requiredRole: ROLE__TYPE[]) => {
//   return CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
//     const Bearertoken = req.headers.authorization;

//     if (!Bearertoken) {
//       throw new App__error(httpStatus.UNAUTHORIZED, "Unauthorized");
//     }
//     const token = Bearertoken.split(" ")[1];

//     jwt.verify(
//       token,
//       config.jwt__access__token__secret as string,
//       function (err, decoded) {
//         // if (err) {
//         //   throw new App__error(HttpStatus.UNAUTHORIZED, "Authorized");
//         // }
//         const decodedValue = (decoded as JwtPayload)?.role;
//         console.log("decoded Value", decodedValue);
//         // if (requiredRole && !requiredRole.includes(decodedValue)) {
//         //   throw new App__error(HttpStatus.UNAUTHORIZED, "Unauthorized");
//         // }
//         req.user = decoded as JwtPayload;
//         next();
//       }
//     );
//   });
// };

// export default auth;

import { NextFunction, Request, Response } from "express";
import CatchAsync from "../utils/CatchAsync";
import httpStatus from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { ROLE__TYPE } from "../modules/User/user.roleType";
import App__error from "../error/App__Error";
import { User } from "../modules/User/user.model";

const auth = (...requiredRoles: ROLE__TYPE[]) => {
  return CatchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      throw new App__error(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }
    const Bearertokens = token.split(" ")[1];
    console.log(Bearertokens);
    const decoded = jwt.verify(
      Bearertokens,
      config.jwt__access__token__secret as string
    ) as JwtPayload;
    console.log(decoded);
    const { role, id } = decoded;
    // Check if user exists
    const user = await User.findById(id);
    if (!user) {
      throw new App__error(httpStatus.NOT_FOUND, "User not found.");
    }

    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new App__error(httpStatus.UNAUTHORIZED, "you are not authorized!");
    }
    req.user = decoded;
    next();
  });
};

export default auth;
