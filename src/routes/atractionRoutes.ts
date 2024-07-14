import { Router } from 'express';
import {
    getAtractions,
    getAtractionsById,
    createAtraction,
    updateAtraction,
    deleteAtraction,
} from '../controllers/atractionController';

const router = Router();

router.get('/atraction', getAtractions);
router.get('/atraction/:id', getAtractionsById);
router.post('/atraction', createAtraction);
router.put('/atraction/:id', updateAtraction);
router.delete('/atraction/:id', deleteAtraction);

export default router;
