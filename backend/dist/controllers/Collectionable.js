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
exports.readCollectionable = exports.readAllCollectionables = exports.deleteCollectionable = exports.updateCollectionable = exports.createCollectionable = void 0;
const Collectionable_1 = __importDefault(require("../models/Collectionable"));
const createCollectionable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const collec = req.body;
    const collecModel = new Collectionable_1.default(collec);
    try {
        yield collecModel.save();
        const idNum = JSON.stringify(collecModel._id);
        res.write("Coleção criada com sucesso com id: ");
        res.write({ idNum }.idNum);
        res.end();
    }
    catch (e) {
        console.error(e);
    }
});
exports.createCollectionable = createCollectionable;
const updateCollectionable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const collecUpdates = req.body;
    try {
        const collec = yield Collectionable_1.default.findByIdAndUpdate(id, collecUpdates, { new: true });
        res.send('Coleção atualizada com sucesso');
    }
    catch (e) {
        console.error(e);
        res.status(500).send("Falha ao atualizar a coleção");
    }
});
exports.updateCollectionable = updateCollectionable;
const deleteCollectionable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const collec = yield Collectionable_1.default.deleteOne({ _id: id });
        res.send('Coleção deletada com sucesso');
    }
    catch (e) {
        console.error(e);
        res.send("Falha ao deletar o ID");
    }
});
exports.deleteCollectionable = deleteCollectionable;
const readAllCollectionables = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const collec = yield Collectionable_1.default.find({});
        res.send(collec);
    }
    catch (e) {
        console.error(e);
        res.status(404).send("Nao foi possivel achar a coleção");
    }
});
exports.readAllCollectionables = readAllCollectionables;
const readCollectionable = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const collec = yield Collectionable_1.default.findById(id);
        if (collec === null) {
            throw (new Error("Coleção nao encontrada"));
        }
        res.send(collec);
    }
    catch (e) {
        console.error(e);
        res.status(404).send("Nao foi possivel achar a coleção");
    }
});
exports.readCollectionable = readCollectionable;
