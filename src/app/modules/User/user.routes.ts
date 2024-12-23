import express, { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { createUserValidationSchema } from "./user.validation";
import { UserController } from "./user.controller";

const router = express.Router();

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
      });
      next();
    } catch (error) {
      next(error);
    }
  };
};

router.post(
  "/register",
  validateRequest(createUserValidationSchema),
  UserController.createUser
);

export const UserRoutes = router;
