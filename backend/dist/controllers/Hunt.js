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
exports.readHunt = exports.readAllHunts = exports.deleteHunt = exports.updateHunt = exports.createHunt = void 0;
const Hunt_1 = __importDefault(require("../models/Hunt"));
const mongoose_1 = __importDefault(require("mongoose"));
const ObjectId = mongoose_1.default.Types.ObjectId;
const createHunt = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hunt = req.body;
    const huntModel = new Hunt_1.default(hunt);
    try {
        yield huntModel.save();
        res.send('Caça cadastrada com sucesso');
    }
    catch (e) {
        console.error(e);
    }
});
exports.createHunt = createHunt;
const updateHunt = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const huntUpdates = req.body;
    try {
        const hunt = yield Hunt_1.default.findByIdAndUpdate(id, huntUpdates, { new: true });
        res.send('Caça atualizada com sucesso');
    }
    catch (e) {
        console.error(e);
        res.status(500).send("Falha ao atualizar a caça");
    }
});
exports.updateHunt = updateHunt;
const deleteHunt = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const hunt = yield Hunt_1.default.deleteOne({ _id: id });
        res.send('Caça deletada com sucesso');
    }
    catch (e) {
        console.error(e);
        res.send("Falha ao deletar o ID");
    }
});
exports.deleteHunt = deleteHunt;
const readAllHunts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let hunt = yield Hunt_1.default.aggregate([
            { $addFields: { totalQuestions: { $size: '$questions' } } },
            { $unset: "questions" }
        ]);
        res.send(hunt);
    }
    catch (e) {
        console.error(e);
        res.status(404).send("Nao foi possivel achar a caça");
    }
});
exports.readAllHunts = readAllHunts;
const readHunt = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const hunt = yield Hunt_1.default.aggregate([
            { "$match": { "_id": new ObjectId(id) } },
            { $addFields: { totalQuestions: { $size: '$questions' } } },
            { $unset: "questions" }
        ]);
        if (hunt === null) {
            throw (new Error("Caça nao encontrada"));
        }
        res.send(hunt[0]);
    }
    catch (e) {
        console.error(e);
        res.status(404).send("Nao foi possivel achar a caça");
    }
});
exports.readHunt = readHunt;
