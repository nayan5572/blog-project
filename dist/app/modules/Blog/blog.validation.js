"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const blogSchema = zod_1.z.object({
    body: zod_1.z.object({
        author: zod_1.z.string(),
        title: zod_1.z.string(),
        content: zod_1.z.string(),
    }),
});
exports.default = blogSchema;
