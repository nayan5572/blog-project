"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = require("express");
const user_roleType_1 = require("../User/user.roleType");
const admin_controller_1 = require("./admin.controller");
const auth_1 = __importDefault(require("../../middlewars/auth"));
const router = (0, express_1.Router)();
router.post("/users/:id/block", (0, auth_1.default)(user_roleType_1.USER__ROLE.admin), admin_controller_1.AdminController.blockUserController);
router.delete("/blogs/:id", (0, auth_1.default)(user_roleType_1.USER__ROLE.admin), admin_controller_1.AdminController.deleteUserBlogController);
exports.adminRouter = router;
