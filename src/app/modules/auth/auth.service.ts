import httpStatus from "http-status";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../../config";
import { Tauth } from "./auth.interface";
import { User } from "../User/user.model";
import App__error from "../../error/App__Error";

const loginService = async (payload: Tauth) => {
  const user = await User.findOne({ email: payload.email });

  // Check if the user exists
  if (!user) {
    throw new App__error(httpStatus.NOT_FOUND, "not found.");
  }

  // Check if the user account is blocked
  if (user.isBlocked === true) {
    throw new App__error(
      httpStatus.FORBIDDEN,
      "This user account is currently blocked!"
    );
  }

  const plainPassword = payload.password;
  const userHashPassword = user.password;
  const isPasswordValid = await bcrypt.compare(plainPassword, userHashPassword);
  if (!isPasswordValid) {
    throw new App__error(httpStatus.UNAUTHORIZED, "Invalid credentials.");
  }

  const jwtPayload = {
    id: user.id,
    name: user.name,
    role: user.role,
    email: user.email,
  };

  // Generate tokens
  const accessToken = jwt.sign(
    jwtPayload,
    config.jwt__access__token__secret as string,
    { expiresIn: "10d" }
  );
  const refreshToken = jwt.sign(
    jwtPayload,
    config.jwt__refresh__token__secret as string,
    { expiresIn: "20d" }
  );

  // Return tokens
  return {
    accessToken,
    refreshToken,
  };
};

export const authService = {
  loginService,
};
