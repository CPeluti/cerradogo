"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Hunt_1 = require("../controllers/Hunt");
const Question_1 = __importDefault(require("./Question"));
const router = express_1.default.Router();
router.use('/:huntId/question', Question_1.default);
router.post('/', Hunt_1.createHunt);
router.patch('/:id', Hunt_1.updateHunt);
router.delete('/:id', Hunt_1.deleteHunt);
router.get('/:id', Hunt_1.readHunt);
router.get('/', Hunt_1.readAllHunts);
//router.post('/validate', validate)
exports.default = router;
