"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const dbUser = process.env.DB_USER;
const dbPasswd = process.env.DB_PASSWORD;
mongoose_1.default.connect(`mongodb+srv://${dbUser}:${dbPasswd}@cluster0.ub24ryp.mongodb.net/?retryWrites=true&w=majority`);
const Cat = mongoose_1.default.model('Cat', { name: String });
const kitty = new Cat({ name: 'teste' });
kitty.save().then(() => console.log('foi'));
app.get('/', (req, res) => {
    res.send('Servidor express com typescript');
});
app.listen(port, () => {
    console.log(`server rodando na porta ${port}`);
});
