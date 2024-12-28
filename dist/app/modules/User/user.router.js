"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const DataValidation_1 = __importDefault(require("../../middlewars/DataValidation"));
const user_validation_1 = __importDefault(require("./user.validation"));
const user_controller_1 = require("./user.controller");
const auth_validation_1 = __importDefault(require("../auth/auth.validation"));
const auth_controller_1 = require("../auth/auth.controller");
const router = (0, express_1.Router)();
router.post("/register", (0, DataValidation_1.default)(user_validation_1.default), user_controller_1.userController.usersController);
router.post("/login", (0, DataValidation_1.default)(auth_validation_1.default), auth_controller_1.AuthController.loginController);
exports.userRouter = router;
