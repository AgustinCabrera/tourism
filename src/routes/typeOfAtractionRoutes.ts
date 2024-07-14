import { Router } from 'express';
import {
    getAtractionID,
} from '../controllers/typeOfAtractionController';

const router = Router();

router.get('/typeOfAtraction/:id', getAtractionID); 

export default router;
