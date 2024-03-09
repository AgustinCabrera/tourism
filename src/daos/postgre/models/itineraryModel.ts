import { Schema, model } from "mongoose";

const itinerarySchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    userID: {
        type: Number,
        required: true
    },
    attractionID: {
        type: Number,
        required: true
    },
});

export const itineraryModel = model('itineraryModel',itinerarySchema);