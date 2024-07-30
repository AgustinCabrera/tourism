"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const atractionPromotionRoutes_1 = __importDefault(require("./routes/atractionPromotionRoutes"));
const atractionRoutes_1 = __importDefault(require("./routes/atractionRoutes"));
const itineraryRoutes_1 = __importDefault(require("./routes/itineraryRoutes"));
const promotionRoutes_1 = __importDefault(require("./routes/promotionRoutes"));
const typeOfAtractionRoutes_1 = __importDefault(require("./routes/typeOfAtractionRoutes"));
const dotenv_1 = require("dotenv");
const cookieParser = require('cookie-parser');
const cors = require('cors');
(0, dotenv_1.configDotenv)();
const app = (0, express_1.default)();
const PORT = 3001;
app.use(express_1.default.json());
app.use(cors());
app.use('/', userRoutes_1.default);
app.use('/', atractionPromotionRoutes_1.default);
app.use('/', atractionRoutes_1.default);
app.use('/', itineraryRoutes_1.default);
app.use('/', promotionRoutes_1.default);
app.use('/', typeOfAtractionRoutes_1.default);
app.use(cookieParser(process.env.SECRETKEY));
function getEnvVariable(key) {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing ${key} environment variable`);
    }
    return value.toLowerCase();
}
const mongouri = getEnvVariable("MONGOURI");
mongoose_1.default.connect(mongouri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.log('Unable to connect to the database:', error));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
