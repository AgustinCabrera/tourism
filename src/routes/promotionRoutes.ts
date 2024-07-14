import { Router } from 'express';
import {
    getPromotions,
    getPromotionsById,
    createPromotion,
    updatePromotion,
    deletePromotion,
} from '../controllers/promotionController';

const router = Router();

router.get('/promotion', getPromotions);
router.get('/promotion/:id', getPromotionsById);
router.post('/promotion', createPromotion);
router.put('/promotion/:id', updatePromotion);
router.delete('/promotion/:id', deletePromotion);

export default router;
