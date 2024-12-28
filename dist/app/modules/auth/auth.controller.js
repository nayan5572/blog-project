"use strict";
/* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable no-unused-vars */
// import CatchAsync from "../../utils/CatchAsync";
// import config from "../../config";
// import { authService } from "./auth.service";
// import sendResponce from "../../utils/SendResponce";
// import { NextFunction, Request, Response } from "express";
// import httpStatus from "http-status";
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
exports.AuthController = void 0;
const CatchAsync_1 = __importDefault(require("../../utils/CatchAsync"));
const SendResponce_1 = __importDefault(require("../../utils/SendResponce"));
const auth_service_1 = require("./auth.service");
const http_status_ts_1 = require("http-status-ts");
const config_1 = __importDefault(require("../../config"));
const loginController = (0, CatchAsync_1.default)(
// eslint-disable-next-line no-unused-vars
(req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield auth_service_1.authService.loginService(req.body);
    const { accessToken, refreshToken } = result;
    res.cookie("refreshToken", refreshToken, {
        secure: config_1.default.node__env === "production",
        httpOnly: true,
    });
    (0, SendResponce_1.default)(res, {
        statusCode: http_status_ts_1.HttpStatus.OK,
        success: true,
        message: "Login successful",
        data: { token: accessToken },
    });
}));
exports.AuthController = {
    loginController,
};
