import { blogController } from "./blog.controller";
import blogValidation from "./blog.validation";
import validateRequest from "../../middlewars/dataValidateRequest";
import { Router } from "express";

const router = Router();

router.post("/", validateRequest(blogValidation), blogController.createBlog);
router.get("/", blogController.getAllBlog);

export default router;
