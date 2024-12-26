"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const user_model_1 = require("../User/user.model");
const App__Error_1 = __importDefault(require("../../error/App__Error"));
const blog_model_1 = require("../Blog/blog.model");
const blockUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isExistUser = yield user_model_1.User.findById(id);
    if (!isExistUser) {
        throw new App__Error_1.default(http_status_1.default.NOT_FOUND, "user not found");
    }
    yield user_model_1.User.findByIdAndUpdate(id, { isBlocked: true }, { new: true });
});
const deleteUserBlogService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield blog_model_1.Blog.findByIdAndDelete(id);
});
exports.AdminService = {
    blockUserService,
    deleteUserBlogService,
};
