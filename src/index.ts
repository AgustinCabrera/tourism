import express from 'express';
import bodyParser from 'body-parser';
import { query } from './db/db';
import indexRoutes from './routes/index';

require('dotenv').config();
const app = express();


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(indexRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor en ejecución en el puerto: ", PORT)
});
