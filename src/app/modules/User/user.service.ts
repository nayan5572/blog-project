// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Tuser } from "./user.interface";
import { User } from "./user.model";
import App__error from "../../error/App__Error";
import httpStatus from "http-status";

const createUserService = async (payload: Tuser) => {
  // Check if user already exists
  const isUserExist = await User.findOne({ email: payload.email });
  if (isUserExist) {
    throw new App__error(httpStatus.BAD_REQUEST, "This user already exists!");
  }

  // Create the user
  const newUser = await User.create(payload);

  // Convert document to object and remove sensitive fields
  const result = newUser.toObject();
  delete result.password;
  delete result.role;
  delete result.isBlocked;

  return result;
};

export const UserService = {
  createUserService,
};
