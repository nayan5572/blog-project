import { Router } from "express";
import { userRouter } from "../modules/User/user.router";
import { blogRouter } from "../modules/blog/blog.router";
import { adminRouter } from "../modules/Admin/admin.router";

const router = Router();

const blogWebsiteRouter = [
  {
    path: "/admin",
    router: adminRouter,
  },
  {
    path: "/blogs",
    router: blogRouter,
  },
  {
    path: "/auth",
    router: userRouter,
  },
];

blogWebsiteRouter.forEach((route) => router.use(route.path, route.router));

export default router;
