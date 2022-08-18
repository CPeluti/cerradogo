"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const collectionSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    rarity: { type: String, required: true },
    about: { type: String, required: true }
});
const CollectionModel = (0, mongoose_1.model)('Collectable', collectionSchema);
exports.default = CollectionModel;
