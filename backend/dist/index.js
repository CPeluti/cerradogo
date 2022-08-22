"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
//import routes
const User_1 = __importDefault(require("./routes/User"));
<<<<<<< HEAD
const Colecoes_1 = __importDefault(require("./routes/Colecoes"));
=======
>>>>>>> bd622c6d27bd7454a7e46e432897c0e53fd6ce53
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT;
const dbUser = process.env.DB_USERNAME;
const dbPasswd = process.env.DB_PASSWORD;
// mongoose.connect(`mongodb://cerradogo:cerradogo@localhost:27017`)
mongoose_1.default.connect(`mongodb+srv://${dbUser}:${dbPasswd}@cluster0.ub24ryp.mongodb.net/?retryWrites=true&w=majority`);
<<<<<<< HEAD
//mongoose.connect(`mongodb://localhost:27017`)
app.use('/user', User_1.default);
app.use('/collection', Colecoes_1.default);
=======
//mongoose.connect(`mongodb://cerradogo:cerradogo@localhost:27017`)
app.use('/user', User_1.default);
>>>>>>> bd622c6d27bd7454a7e46e432897c0e53fd6ce53
app.listen(port, () => {
    console.log(`server rodando na porta ${port}`);
});
