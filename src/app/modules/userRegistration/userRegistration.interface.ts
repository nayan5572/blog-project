import { Types } from "mongoose";

export type TUserRegistration = {
  academicUser: Types.ObjectId;
  name: string;
  email: string;
  password: string;
  startDate: Date;
  endDate: Date;
};
