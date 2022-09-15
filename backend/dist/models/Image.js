"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const imageSchema = new mongoose_1.Schema({
    file: { type: String },
    fileType: { type: String }
});
exports.default = imageSchema;
