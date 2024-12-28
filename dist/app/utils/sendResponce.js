"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponce = (res, data) => {
    res.status(data.statusCode).json({
        success: data.success,
        message: data.message || "No message provided",
        statusCode: data.statusCode,
        data: data.data || null,
    });
};
exports.default = sendResponce;
