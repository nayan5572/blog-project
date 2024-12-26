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
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAdminId = exports.findLastAdminId = exports.generateUserId = exports.findLastUserId = void 0;
const user_model_1 = require("./user.model");
// Find the last user ID for a specific role
const findLastUserId = (role) => __awaiter(void 0, void 0, void 0, function* () {
    const lastUser = yield user_model_1.User.findOne({ role }, { id: 1, _id: 0 })
        .sort({ createdAt: -1 })
        .lean();
    return (lastUser === null || lastUser === void 0 ? void 0 : lastUser.id) ? lastUser.id.substring(2) : undefined;
});
exports.findLastUserId = findLastUserId;
// Generate a new user ID
const generateUserId = () => __awaiter(void 0, void 0, void 0, function* () {
    let currentId = (0).toString();
    const lastUserId = yield (0, exports.findLastUserId)("user");
    if (lastUserId) {
        currentId = lastUserId;
    }
    const incrementId = (Number(currentId) + 1).toString().padStart(4, "0");
    return `U-${incrementId}`; // Prefix "U-" for users
});
exports.generateUserId = generateUserId;
// Find the last admin ID
const findLastAdminId = () => __awaiter(void 0, void 0, void 0, function* () {
    const lastAdmin = yield user_model_1.User.findOne({ role: "admin" }, { id: 1, _id: 0 })
        .sort({ createdAt: -1 })
        .lean();
    return (lastAdmin === null || lastAdmin === void 0 ? void 0 : lastAdmin.id) ? lastAdmin.id.substring(2) : undefined;
});
exports.findLastAdminId = findLastAdminId;
// Generate a new admin ID
const generateAdminId = () => __awaiter(void 0, void 0, void 0, function* () {
    let currentId = (0).toString();
    const lastAdminId = yield (0, exports.findLastAdminId)();
    if (lastAdminId) {
        currentId = lastAdminId;
    }
    const incrementId = (Number(currentId) + 1).toString().padStart(4, "0");
    return `A-${incrementId}`; // Prefix "A-" for admins
});
exports.generateAdminId = generateAdminId;
