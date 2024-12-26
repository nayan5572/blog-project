"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const global__Error_1 = __importDefault(require("./app/error/global__Error"));
const not__found_1 = __importDefault(require("./app/error/not__found"));
const routes_1 = __importDefault(require("./app/routes"));
const app = (0, express_1.default)();
// parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// router
app.use("/api", routes_1.default);
app.get("/", (req, res) => {
    res.send("server is running ...!");
});
app.use(global__Error_1.default);
app.use(not__found_1.default);
exports.default = app;
