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
exports.randomQuestion = exports.readQuestion = exports.readAllQuestions = exports.deleteQuestion = exports.updateQuestion = exports.createQuestion = void 0;
const Question_1 = __importDefault(require("../models/Question"));
const Hunt_1 = __importDefault(require("../models/Hunt"));
const createQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const question = req.body;
    const questionModel = new Question_1.default(question);
    try {
        const result = yield questionModel.save();
        yield Hunt_1.default.findByIdAndUpdate(req.params.huntId, { $push: { questions: [result._id] } });
        res.send('Pergunta cadastrada com sucesso');
    }
    catch (e) {
        console.error(e);
    }
});
exports.createQuestion = createQuestion;
const updateQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const questionUpdates = req.body;
    try {
        const question = yield Question_1.default.findByIdAndUpdate(id, questionUpdates, { new: true });
        res.send('Pergunta atualizada com sucesso');
    }
    catch (e) {
        console.error(e);
        res.status(500).send("Falha ao atualizar a pergunta");
    }
});
exports.updateQuestion = updateQuestion;
const deleteQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const question = yield Question_1.default.deleteOne({ _id: id });
        res.send('Pergunta deletada com sucesso');
    }
    catch (e) {
        console.error(e);
        res.send("Falha ao deletar o ID");
    }
});
exports.deleteQuestion = deleteQuestion;
const readAllQuestions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hunt = yield Hunt_1.default.findById(req.params.huntId).select('questions -_id');
        if (hunt === null || hunt === void 0 ? void 0 : hunt.questions) {
            const question = yield Question_1.default.find({
                '_id': { $in: hunt.questions }
            });
            res.send(question);
        }
        else {
            res.send([]);
        }
    }
    catch (e) {
        console.error(e);
        res.status(404).send("Nao foi possivel achar a pergunta");
    }
});
exports.readAllQuestions = readAllQuestions;
const readQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const question = yield Question_1.default.findById(id);
        if (question === null) {
            throw (new Error("Pergunta nao encontrada"));
        }
        res.send(question);
    }
    catch (e) {
        console.error(e);
        res.status(404).send("Nao foi possivel achar a pergunta");
    }
});
exports.readQuestion = readQuestion;
const randomQuestion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hunt = yield Hunt_1.default.findById(req.params.huntId).select('questions -_id');
        let huntId = hunt === null || hunt === void 0 ? void 0 : hunt.questions;
        let id;
        if (!huntId) {
            throw new Error();
        }
        id = huntId[Math.floor(Math.random() * huntId.length)];
        const question = yield Question_1.default.findById(id);
        res.send(question);
    }
    catch (_a) {
        res.status(404).send("falha ao pegar uma pergunta aleatória");
    }
});
exports.randomQuestion = randomQuestion;
