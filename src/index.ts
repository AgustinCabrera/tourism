import express from 'express';
import bodyParser from 'body-parser';
import { query } from './db/db';
import indexRoutes from './routes/index';
import {getUsers} from './db/queries'



require('dotenv').config();
const app = express();


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(indexRoutes);

const PORT = process.env.PORT || 3000;

app.get('/users', getUsers);



app.listen(PORT, () => {
    console.log("Servidor en ejecución en el puerto: ", PORT)
});
