"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItineraryModel = void 0;
const ItinerarySchema = () => new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    userId: {
        type: Number,
        required: true,
    },
    atractionId: {
        type: Number,
        required: true,
    }
});
exports.ItineraryModel = mongoose.model('itinerary', ItinerarySchema);
