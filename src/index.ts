import express from 'express';
import bodyParser from 'body-parser';
//import indexRoutes from './routes/index';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const DBPATH = process.env.DBPATH;
console.log(DBPATH);


//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/',indexRoutes);

const PORT = process.env.PORT || 3000;


try {
    app.listen(PORT, () => {
        console.log("Server running on port:", PORT);
        });
        mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log('MongoDB connected'))
            .catch((err:Error) => console.log(err));
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

