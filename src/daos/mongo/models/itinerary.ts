import mongoose, {Document, Schema} from 'mongoose'

export interface IItinerary extends Document {
    id: number;
    userId: number;
    atractionId: number;
}

const ItinerarySchema =  new Schema<IItinerary>({
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
const Itinerary = mongoose.model<IItinerary>('itinerary',ItinerarySchema);
export default Itinerary;