import mongoose, {Document, Schema} from "mongoose";

export interface ItypeOfAtraction extends Document {
    id: number;
    name: string;
}
const typeOfAtractionSchema = new Schema<ItypeOfAtraction>({
    id:{
        type: Number,
        required: true,
    },
    name:{
        tpye: String,
        required: true,
    }
});
const TypeOfAtraction = mongoose.model<ItypeOfAtraction>('Type of atractions', typeOfAtractionSchema);
export default TypeOfAtraction;