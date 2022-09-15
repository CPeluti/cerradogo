"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Collectionable_1 = require("../controllers/Collectionable");
const router = express_1.default.Router();
router.post('/', Collectionable_1.createCollectionable);
router.patch('/:id', Collectionable_1.updateCollectionable);
router.delete('/:id', Collectionable_1.deleteCollectionable);
router.get('/:id', Collectionable_1.readCollectionable);
router.get('/', Collectionable_1.readAllCollectionables);
//router.post('/validate', validate)
exports.default = router;
