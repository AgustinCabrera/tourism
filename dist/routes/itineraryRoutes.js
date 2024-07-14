"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const itineraryController_1 = require("../controllers/itineraryController");
const router = (0, express_1.Router)();
router.get('/itinerary', itineraryController_1.getItinerarys);
router.get('/itinerary/:id', itineraryController_1.getItineraryById);
router.post('/itinerary', itineraryController_1.createItinerary);
router.put('/itinerary/:id', itineraryController_1.updateItinerary);
router.delete('/itinerary/:id', itineraryController_1.deleteItinerary);
exports.default = router;
