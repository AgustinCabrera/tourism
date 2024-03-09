import {Schema,model} from 'mongoose';

const attractionSchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    tickets: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    time: {
        type: Number,
        required: true
    },
    attraction_type_id: { 
        type: Number,
        required: true
    },
    is_deleted: {
        type: Boolean,
        default: false
    }
});

export const AttractionModel = model('attraction',attractionSchema); //