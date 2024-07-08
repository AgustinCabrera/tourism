import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api', userRoutes);

const mongoUri = 'mongodb://0.0.0.0:27017/local';

mongoose.connect(mongoUri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(error => console.log('Unable to connect to the database:', error));

app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});
