"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const user_validation_1 = require("./user.validation");
const user_controller_1 = require("./user.controller");
const dataValidateRequest_1 = __importDefault(require("../../middlewars/dataValidateRequest"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/register", (0, dataValidateRequest_1.default)(user_validation_1.createUserValidationSchema), user_controller_1.UserController.createUser);
exports.UserRoutes = router;
