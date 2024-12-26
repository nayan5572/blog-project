import { Router } from "express";
import auth from "../../middlewars/auth";
import { USER__ROLE } from "../User/user.roleType";
import { AdminController } from "./admin.controller";

const router = Router();

router.post(
  "/users/:id/block",
  auth(USER__ROLE.admin),
  AdminController.blockUserController
);
router.delete(
  "/blogs/:id",
  auth(USER__ROLE.admin),
  AdminController.deleteUserBlogController
);

export const adminRouter = router;
