import { Router } from "express";
import DataValidation from "../../middlewars/DataValidation";
import usrValidation from "./user.validation";
import { userController } from "./user.controller";
import loginValidation from "../auth/auth.validation";
import { AuthController } from "../auth/auth.controller";

const router = Router();

router.post(
  "/register",
  DataValidation(usrValidation),
  userController.usersController
);
router.post(
  "/login",
  DataValidation(loginValidation),
  AuthController.loginController
);

export const userRouter = router;
