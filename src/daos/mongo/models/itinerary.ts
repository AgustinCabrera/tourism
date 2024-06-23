const ItinerarySchema = () => new mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    userId:{
        type: Number,
        required: true,
    },
    atractionId:{
        type: Number,
        required: true,
    }
})
export const ItineraryModel = mongoose.model('itinerary',ItinerarySchema);