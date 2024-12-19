"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleCastError = (err) => {
    const errorSources = [
        {
            path: err.path,
            message: err.message,
        },
    ];
    const statusCode = 4000;
    return {
        statusCode,
        message: "Invalid ID",
        errorSources,
    };
};
exports.default = handleCastError;
