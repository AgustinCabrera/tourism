import express from 'express';
import bodyParser from 'body-parser';
import { query } from './db/db';


const router = express.Router();
import { router as attractionRouter } from './routes/attraction.ts';
import { router as promotionRouter } from './routes/promotion.ts';

const app = express();

app.use(bodyParser.json());


app.use('/api/atracciones', attractionRouter);
app.use('/api/promociones', promotionRouter);


app.get('/users', async(req, res) => {
    try {
        const users = await query('SELECT * FROM users',[]);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor en ejecución en el puerto ${PORT}");
});
