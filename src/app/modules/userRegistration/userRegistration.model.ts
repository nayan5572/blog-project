import { Schema, model } from "mongoose";
import { TUserRegistration } from "./userRegistration.interface";

// Define the schema
const UserRegistrationSchema = new Schema<TUserRegistration>(
  {
    academicUser: {
      type: Schema.Types.ObjectId, // Corrected to use Schema.Types.ObjectId
      ref: "AcademicUser", // Reference to another collection
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensures email uniqueness
      lowercase: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please provide a valid email address",
      ], // Email validation regex
    },
    password: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds `createdAt` and `updatedAt`
  }
);

// Create the model
const UserRegistration = model<TUserRegistration>(
  "UserRegistration",
  UserRegistrationSchema
);

export default UserRegistration;
