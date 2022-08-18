"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Colecoes_1 = __importDefault(require("../controllers/Colecoes"));
const router = express_1.default.Router();
router.post('/', Colecoes_1.default);
//router.post('/validate', validate)
exports.default = router;
