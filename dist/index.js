"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import indexRoutes from './routes/index';
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const DBPATH = process.env.DBPATH;
console.log(DBPATH);
//middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//app.use('/',indexRoutes);
const PORT = process.env.PORT || 3000;
try {
    app.listen(PORT, () => {
        console.log("Server running on port:", PORT);
    });
    mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err));
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}
