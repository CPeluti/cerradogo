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
const authentication_1 = __importDefault(require("../helpers/authentication"));
const dotenv_1 = __importDefault(require("dotenv"));
const User_1 = __importDefault(require("../models/User"));
dotenv_1.default.config();
const age = process.env.EXPIRESIN ? parseInt(process.env.EXPIRESIN) : 15000;
const key = "teste";
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        const token = yield authentication_1.default.auth({ username, password }, key);
        res.cookie("session", token.token, {
            path: '/',
            httpOnly: true,
            maxAge: age,
        });
        const user = token.user;
        yield User_1.default.findByIdAndUpdate(user['_id'], { token: token.token }, { new: true });
        res.status(200).send({ user: token.user });
    }
    catch (e) {
        console.error(e);
        res.status(401).end();
    }
});
exports.default = create;
