import express,{Request,Response} from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';
import atractionPromotionRoutes from './routes/atractionPromotionRoutes';
import atractionRoutes from './routes/atractionRoutes';
import itineraryRoutes from './routes/itineraryRoutes'; 
import promotionRoutes from './routes/promotionRoutes';
import typeOfAtractionRoutes from './routes/typeOfAtractionRoutes';
import { configDotenv } from 'dotenv';
const cookieParser = require('cookie-parser')
const cors = require('cors')



configDotenv();
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors())
app.use('/', userRoutes);
app.use('/', atractionPromotionRoutes);
app.use('/', atractionRoutes);
app.use('/', itineraryRoutes);
app.use('/', promotionRoutes);
app.use('/', typeOfAtractionRoutes);
app.use(cookieParser(process.env.SECRETKEY))

interface Env{
    MONGOURI: string;
}

function getEnvVariable(key: keyof Env):string {
    const value = process.env[key];
    if (!value) {
        throw new Error(`Missing ${key} environment variable`);
    }
    return value.toLowerCase();
}
const mongouri = getEnvVariable("MONGOURI");

mongoose.connect(mongouri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.log('Unable to connect to the database:', error));

app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
