import mongoose, {Schema, Document} from "mongoose";

export interface Iatraction extends Document {
    id: number;
    tickets: number;
    cost: Float32Array;
    name: string;
    time: number;
    atractionTypeId: number;
    is_deleted: boolean;
}
const AtractionSchema = new Schema<Iatraction>({
id:{
    type: Number,
    required: true,
},
tickets: {
    type: Number,
    required: true
},
cost: {
    type: Float32Array,
    required: true,
    unique: true
},
name: {
    type: String,
    required: true
},
time: {
    type: Number,
    required: true
},
atractionTypeId: {
    type: Number,
    required: true
},
is_deleted: {
    type: Boolean,
    required:true
}
});

const Atraction = mongoose.model<Iatraction>('atraction', AtractionSchema);
export default Atraction;