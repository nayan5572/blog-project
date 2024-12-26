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
const config_1 = __importDefault(require("../config"));
const http_status_ts_1 = require("http-status-ts");
const App__Error_1 = __importDefault(require("../error/App__Error"));
const CatchAsync_1 = __importDefault(require("../utils/CatchAsync"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (...requiredRole) => {
    return (0, CatchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const token = req.headers.authorization;
        if (!token) {
            throw new App__Error_1.default(http_status_ts_1.HttpStatus.UNAUTHORIZED, "you are not UnAuthorized");
        }
        jsonwebtoken_1.default.verify(token, config_1.default.jwt_access_secret, 
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function (err, decoded) {
            if (err) {
                throw new App__Error_1.default(http_status_ts_1.HttpStatus.UNAUTHORIZED, "You are not Authorized");
            }
            const decodedValue = decoded === null || decoded === void 0 ? void 0 : decoded.role;
            if (requiredRole && !requiredRole.includes(decodedValue)) {
                throw new App__Error_1.default(http_status_ts_1.HttpStatus.UNAUTHORIZED, "You are not unAuthorized");
            }
            // req.user = decoded as JwtPayload;
            next();
        });
    }));
};
exports.default = auth;