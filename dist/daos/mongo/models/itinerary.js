"use strict";
const itinerary = new Schema({
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
module.exports = mongoose.model('itinerary', itinerary);
