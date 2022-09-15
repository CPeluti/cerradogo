"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const collectionableSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    rarity: { type: String, required: true },
    about: { type: String, required: true }
});
const CollectionableModel = (0, mongoose_1.model)('Collectionable', collectionableSchema);
exports.default = CollectionableModel;
