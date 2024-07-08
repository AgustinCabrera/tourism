"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use('/api', userRoutes_1.default);
const mongoUri = 'mongodb://0.0.0.0:27017/local';
mongoose_1.default.connect(mongoUri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.log('Unable to connect to the database:', error));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
