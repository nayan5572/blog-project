"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
const express_1 = require("express");
const DataValidation_1 = __importDefault(require("../../middlewars/DataValidation"));
const blog_validation_1 = __importDefault(require("./blog.validation"));
const user_roleType_1 = require("../User/user.roleType");
const blog_controller_1 = require("./blog.controller");
const auth_1 = __importDefault(require("../../middlewars/auth"));
const blog_update_validation_1 = __importDefault(require("./blog.update.validation"));
const router = (0, express_1.Router)();
router.post("/", (0, DataValidation_1.default)(blog_validation_1.default), (0, auth_1.default)(user_roleType_1.USER__ROLE.user), blog_controller_1.blogController.createBlogController);
router.get("/", blog_controller_1.blogController.getAllBlogController);
router.patch("/:id", (0, auth_1.default)(user_roleType_1.USER__ROLE.user), (0, DataValidation_1.default)(blog_update_validation_1.default), blog_controller_1.blogController.updateBlogController);
router.delete("/:id", (0, auth_1.default)(user_roleType_1.USER__ROLE.user), blog_controller_1.blogController.deleteBlogController);
exports.blogRouter = router;
