"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Login_1 = __importDefault(require("../controllers/Login"));
const Auth_1 = __importDefault(require("../controllers/Auth"));
const router = express_1.default.Router();
router.post('/', Login_1.default);
router.post('/validate', Auth_1.default);
exports.default = router;
