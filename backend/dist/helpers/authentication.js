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
const jsonwebtoken_1 = require("jsonwebtoken");
const User_1 = __importDefault(require("../models/User"));
const express_handler_errors_1 = require("express-handler-errors");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class Auth {
    auth(user, key) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password } = user;
            try {
                const res = yield User_1.default.findOne({ email: username });
                if (!res) {
                    throw new express_handler_errors_1.CustomError({
                        code: 'USER_NOT_FOUND',
                        message: 'Usuario não foi encontrado',
                        status: 404
                    });
                }
                const token = yield (0, jsonwebtoken_1.sign)({
                    _id: res._id,
                    name: res.name
                }, key, {
                    expiresIn: process.env.EXPIRESIN
                });
                return { user: res, token };
            }
            catch (e) {
                console.error(e);
                throw new Error();
            }
        });
    }
    validate(token, key) {
        const jwt = token.split(' ')[1];
        let isValid = false;
        (0, jsonwebtoken_1.verify)(jwt, key, (err) => {
            if (err) {
                return;
            }
            isValid = true;
        });
        return isValid;
    }
}
exports.default = new Auth();
