"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Image_1 = __importDefault(require("./Image"));
const questionSchema = new mongoose_1.Schema({
    question: { type: String, required: true },
    img: Image_1.default,
    answers: { type: [{ text: String, right: Boolean, selected: String }], required: true }
});
const QuestionModel = (0, mongoose_1.model)('Question', questionSchema);
exports.default = QuestionModel;
