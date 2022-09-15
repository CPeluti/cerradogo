"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    nickname: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, select: false },
    avatar: { type: String },
    experience: { type: Number, required: true },
    rank: { type: Number, required: true },
    leaguePoints: { type: Number, required: true },
    hunts: { type: [{ huntId: String, progress: Number }], required: true },
    token: { type: String, required: false }
});
const UserModel = (0, mongoose_1.model)('User', userSchema);
exports.default = UserModel;
