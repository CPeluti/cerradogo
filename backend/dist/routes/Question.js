"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Question_1 = require("../controllers/Question");
const router = express_1.default.Router({ mergeParams: true });
router.post('/', Question_1.createQuestion);
router.patch('/:id', Question_1.updateQuestion);
router.delete('/:id', Question_1.deleteQuestion);
router.get('/specific/:id', Question_1.readQuestion);
router.get('/', Question_1.readAllQuestions);
router.get('/random', Question_1.randomQuestion);
//router.post('/validate', validate)
exports.default = router;
