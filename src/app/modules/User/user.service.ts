import { TUser } from "./user.interface";
import AppError from "../../error/AppError";
import { HttpStatus } from "http-status-ts";
import { User } from "./user.model";

// Function to create a User
export const createUserIntoDB = async (payload: TUser) => {
  const isUserExit = await User.findOne({ email: payload.email });

  if (isUserExit) {
    throw new AppError(HttpStatus.BAD_REQUEST, "This User is already exists");
  }

  // create user
  const newUser = await User.create(payload);

  // convert document to object & remove senitive fields
  const result = newUser.toObject();
  delete result.password;
  delete result.role;
  delete result.isBlocked;

  return result;
};

export const UserService = {
  createUserIntoDB,
};
