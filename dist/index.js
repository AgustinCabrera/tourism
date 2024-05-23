"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const queries_1 = require("./db/queries");
require('dotenv').config();
const app = (0, express_1.default)();
//middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/', index_1.default);
const PORT = process.env.PORT || 3000;
app.get('/users', queries_1.getUsers);
app.listen(PORT, () => {
    console.log("Servidor en ejecución en el puerto: ", PORT);
});
