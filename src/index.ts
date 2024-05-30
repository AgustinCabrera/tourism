import express from 'express';
import bodyParser from 'body-parser';
import { query } from './db/db';
import indexRoutes from './routes/index';
import {getUsers} from './db/queries'
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const DBPATH = process.env.DBPATH;
console.log(DBPATH);


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',indexRoutes);

const PORT = process.env.PORT || 3000;

app.get('/users', getUsers);

try {
    app.listen(PORT, () => {
        console.log("Server running on port:", PORT);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

