import { Router } from "express";
import auth from "../../middlewars/auth";
import { USER_ROLE } from "../User/user.constant";
import { AdminController } from "./admin.controller";

const router = Router();

router.post(
  "/users/:id/block",
  auth(USER_ROLE.admin),
  AdminController.blockUserController
);

router.delete(
  "/blogs/:id",
  auth(USER_ROLE.admin),
  AdminController.deleteUserBlockController
);

export const adminRouter = router;
