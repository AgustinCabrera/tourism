import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';
import atractionPromotionRoutes from './routes/atractionPromotionRoutes';
import atractionRoutes from './routes/atractionRoutes';
import itineraryRoutes from './routes/itineraryRoutes'; 
import promotionRoutes from './routes/promotionRoutes';
import typeOfAtractionRoutes from './routes/typeOfAtractionRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', userRoutes);
app.use('/', atractionPromotionRoutes);
app.use('/', atractionRoutes);
app.use('/', itineraryRoutes);
app.use('/', promotionRoutes);
app.use('/', typeOfAtractionRoutes);


const mongoUri = 'mongodb://0.0.0.0:27017/local';

mongoose.connect(mongoUri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.log('Unable to connect to the database:', error));

app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
