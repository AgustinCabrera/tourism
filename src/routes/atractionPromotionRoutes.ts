import { Router } from 'express';
import {
    getAtractionID,
    getPromotionID,
} from '../controllers/atractionPromotionController';

const router = Router();

router.get('/atractionPromotionA/:id', getAtractionID); // fijate despues que la a es para atrac y p promo
router.get('/atractionPromotionP/:id', getPromotionID);

export default router;
