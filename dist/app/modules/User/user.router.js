"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
// import express, { NextFunction, Request, Response } from "express";
const express_1 = require("express");
const DataValidation_1 = __importDefault(require("../../middlewars/DataValidation"));
const user_controller_1 = require("./user.controller");
const user_validation_1 = __importDefault(require("./user.validation"));
const router = (0, express_1.Router)();
router.post("/register", (0, DataValidation_1.default)(user_validation_1.default), user_controller_1.userController.usersController);
// router.post(
//   "/login",
//   DataValidation(loginValidation),
//   AuthController.loginController
// );
exports.userRouter = router;
