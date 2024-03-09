import { Schema, model } from "mongoose";

const attractionPromotionSchema = new Schema({
    id:{
        type: Number,
        required: true
    },
    promotionId: {
        type: Number,
        required: true
    },
});

export const attractionPromotionModel = model('attractionPromotion',attractionPromotionSchema);