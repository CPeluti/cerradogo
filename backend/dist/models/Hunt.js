"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Image_1 = __importDefault(require("./Image"));
const huntSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    latlong: { type: [Number], required: true },
    questions: { type: [String], select: true },
    tips: { type: [String], required: true },
    img: Image_1.default
});
const HuntModel = (0, mongoose_1.model)('Hunt', huntSchema);
exports.default = HuntModel;
