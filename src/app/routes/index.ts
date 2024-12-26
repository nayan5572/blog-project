import { Router } from "express";
import { adminRouter } from "../modules/Admin/admin.router";
import { blogRouter } from "../modules/Blog/blog.router";
import { userRouter } from "../modules/User/user.router";

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
