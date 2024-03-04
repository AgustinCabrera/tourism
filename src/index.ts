import express from 'express';
import bodyParser from 'body-parser';
import { router as attractionRouter } from './routes/attraction.ts';
import { router as promotionRouter } from './routes/promotion.ts';
import 
// Importa otros routers según sea necesario

const app = express();


app.use(bodyParser.json());


app.use('/api/atracciones', attractionRouter);
app.use('/api/promociones', promotionRouter);


app.get('/', async(req, res) => {
    res.send('¡Bienvenido al Sistema de Turismo de la Tierra Media!');
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor en ejecución en el puerto ${PORT}");
});
