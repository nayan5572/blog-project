import { Router } from "express";
import DataValidation from "../../middlewars/DataValidation";
import blogSchema from "./blog.validation";
import { blogController } from "./blog.controller";
import auth from "../../middlewars/auth";
import { USER__ROLE } from "../User/user.roleType";
import blogUpdateValidationSchema from "./blog.update.validation";

const router = Router();

router.post(
  "/",
  DataValidation(blogSchema),
  blogController.createBlogController
);
router.get("/", blogController.getAllBlogController);
router.patch(
  "/:id",
  auth(USER__ROLE.user),
  DataValidation(blogUpdateValidationSchema),
  blogController.updateBlogController
);
router.delete(
  "/:id",
  auth(USER__ROLE.user),
  blogController.deleteBlogController
);

export const blogRouter = router;
