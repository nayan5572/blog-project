import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import isEmail from "validator/lib/isEmail";

const UserSchema = new Schema<TUser>(
  {
    id: { type: String },
    name: {
      firstName: { type: String, required: true },
      middleName: { type: String },
      lastName: { type: String, required: true },
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      validate: {
        validator: (value: string) => isEmail(value),
        message: "{VALUE} is not a valid email!",
      },
    },
    password: { type: String, required: true, minlength: 6, maxlength: 20 },
    role: { type: String, enum: ["admin", "user"], default: "user" },
    isBlocked: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const User = model<TUser>("User", UserSchema);
