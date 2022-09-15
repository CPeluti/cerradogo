"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = require("../controllers/User");
const router = express_1.default.Router();
router.post('/', User_1.create);
router.get('/:id', User_1.findById);
router.get('/', User_1.findAll);
router.patch('/:id', User_1.updateById);
router.delete('/:id', User_1.deleteById);
router.post('/point', User_1.point);
exports.default = router;
