"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const admin_router_1 = require("../modules/Admin/admin.router");
const blog_router_1 = require("../modules/Blog/blog.router");
const user_router_1 = require("../modules/User/user.router");
const router = (0, express_1.Router)();
const blogWebsiteRouter = [
    {
        path: "/admin",
        router: admin_router_1.adminRouter,
    },
    {
        path: "/blogs",
        router: blog_router_1.blogRouter,
    },
    {
        path: "/auth",
        router: user_router_1.userRouter,
    },
];
blogWebsiteRouter.forEach((route) => router.use(route.path, route.router));
exports.default = router;
