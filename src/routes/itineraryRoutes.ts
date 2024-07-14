import { Router } from 'express';
import {
    getItinerarys,
    getItineraryById,
    createItinerary,
    updateItinerary,
    deleteItinerary,
} from '../controllers/itineraryController';

const router = Router();

router.get('/itinerary', getItinerarys);
router.get('/itinerary/:id', getItineraryById);
router.post('/itinerary', createItinerary);
router.put('/itinerary/:id', updateItinerary);
router.delete('/itinerary/:id', deleteItinerary);

export default router;
