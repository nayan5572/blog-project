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
exports.blogService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const App__Error_1 = __importDefault(require("../../error/App__Error"));
const user_model_1 = require("../User/user.model");
const blog_model_1 = require("./blog.model");
const createBlogService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExistUser = yield user_model_1.User.findById(payload.author);
    if (!isExistUser) {
        throw new App__Error_1.default(http_status_1.default.NOT_FOUND, "User not found. Please provide a valid user ID.");
    }
    const result = yield blog_model_1.Blog.create(payload);
    return result;
});
const getAllBlogService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const allBlogs = new QueryBuilder_1.default(blog_model_1.Blog.find().populate({
        path: "author",
        select: "-password -isBlocked",
    }), query)
        .search(["title", "content"])
        .filter()
        .sort()
        .paginate()
        .fields();
    const result = yield allBlogs.modelQuery;
    return result;
});
const updateBlogService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // const isExistUser = await User.findById(payload.author)
    // if(!isExistUser){
    //     throw new App__error(httpStatus.NOT_FOUND,'User not found. Please provide a valid user ID.')
    // }
    const result = yield blog_model_1.Blog.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
const deleteBlogService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isBlogExist = yield blog_model_1.Blog.findById(id);
    if (!isBlogExist) {
        throw new App__Error_1.default(http_status_1.default.NOT_FOUND, "Blog not found. Please provide a valid Blog ID.");
    }
    yield blog_model_1.Blog.findByIdAndDelete(id);
});
exports.blogService = {
    createBlogService,
    getAllBlogService,
    updateBlogService,
    deleteBlogService,
};
