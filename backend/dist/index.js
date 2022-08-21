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
const Question_1 = __importDefault(require("./routes/Question"));
const Login_1 = __importDefault(require("./routes/Login"));
const Hunt_1 = __importDefault(require("./routes/Hunt"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const port = process.env.PORT;
const dbUser = process.env.DB_USERNAME;
const dbPasswd = process.env.DB_PASSWORD;
mongoose_1.default.connect(`mongodb+srv://${dbUser}:${dbPasswd}@cluster0.ub24ryp.mongodb.net/?retryWrites=true&w=majority`);
app.use('/user', User_1.default);
app.use('/question', Question_1.default);
app.use('/login', Login_1.default);
app.use('/hunt', Hunt_1.default);
app.listen(port, () => {
    console.log(`server rodando na porta ${port}`);
});
