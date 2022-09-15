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
exports.point = exports.deleteById = exports.updateById = exports.findById = exports.findAll = exports.create = void 0;
const User_1 = __importDefault(require("../models/User"));
const Hunt_1 = __importDefault(require("../models/Hunt"));
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = req.body;
    const userExist = yield User_1.default.find({ email: user.email });
    if (userExist.length) {
        res.status(400).send('Email ja cadastrado');
        return;
    }
    const userModel = new User_1.default(user);
    try {
        yield userModel.save();
        res.send('Usuario cadastrado com sucesso');
    }
    catch (e) {
        console.error(e);
    }
});
exports.create = create;
const findAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.find({});
        res.send(user);
    }
    catch (e) {
        console.error(e);
        res.status(404).send("Nao foi possivel achar o usuario");
    }
});
exports.findAll = findAll;
const findById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const user = yield User_1.default.findById(id);
        if (user === null) {
            throw (new Error("Usuario nao encontrado"));
        }
        res.send(user);
    }
    catch (e) {
        console.error(e);
        res.status(404).send("Nao foi possivel achar o usuario");
    }
});
exports.findById = findById;
const updateById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = req.body;
    try {
        var keyArray = Object.keys(data);
        let flag = false; // false significa que a key enviada no body não está presente no user
        for (let _i = 0; _i < keyArray.length; _i++) {
            if (User_1.default.hasOwnProperty(keyArray[_i])) {
                flag = true;
                break;
            }
        }
        if (flag) {
            const user = yield User_1.default.findByIdAndUpdate(id, req.body, { new: true });
            res.send("Usuario atualizado com sucesso");
        }
        else {
            res.send("Nao foi possivel atualizar usuario, verifique os atributos");
        }
    }
    catch (e) {
        console.error(e);
        res.status(500).send("Falha ao atualizar o usuario");
    }
});
exports.updateById = updateById;
const deleteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const user = yield User_1.default.deleteOne({ _id: id });
        res.send("usuario deletado com sucesso");
    }
    catch (e) {
        console.error(e);
        res.send("Falha ao deletar o ID");
    }
});
exports.deleteById = deleteById;
const point = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, player } = req.body;
    try {
        const user = yield User_1.default.findById(player);
        const hunt = yield Hunt_1.default.findById(id);
        let userHunts = user === null || user === void 0 ? void 0 : user.hunts;
        let userHuntsArray;
        let huntsLength = 0;
        if (hunt === null || hunt === void 0 ? void 0 : hunt.questions) {
            huntsLength = hunt.questions.length;
        }
        if (userHunts === null || userHunts === void 0 ? void 0 : userHunts.length) {
            if (userHunts.find(el => el.huntId === id)) {
                userHuntsArray = userHunts === null || userHunts === void 0 ? void 0 : userHunts.map(el => {
                    if (el.huntId === id) {
                        if (el.progress < 1) {
                            el.progress += 1 / huntsLength;
                        }
                    }
                    return el;
                });
                const result = yield User_1.default.findByIdAndUpdate(player, { hunts: userHunts }, { new: true });
                res.send(result);
                return;
            }
            else {
                const newUserHunts = [...userHunts, { huntId: id, progress: 1 / huntsLength }];
                const result = yield User_1.default.findByIdAndUpdate(player, { hunts: newUserHunts }, { new: true });
                res.send(result);
                return;
            }
        }
        else {
            userHunts = [{ huntId: id, progress: 1 / huntsLength }];
            const result = yield User_1.default.findByIdAndUpdate(player, { hunts: userHunts }, { new: true });
            res.send(result);
        }
    }
    catch (_a) { }
});
exports.point = point;
