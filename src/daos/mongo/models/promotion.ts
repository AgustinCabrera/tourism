import mongoose, {Document, Schema} from "mongoose";
export interface IPromotion extends Document {
    id: number;
    promotionType:string;
    pricingStrategy: string;
    costOrDiscount: number[] | number;
    isDeleted: boolean;
}
const PromotionSchema = new Schema<IPromotion>({
    id:{ 
        type: Number,
        required: true
    },
    promotionType:{
        type: String,
        required: true,
    },
    pricingStrategy:{
        type: String,
        required: true
    },
    costOrDiscount:{
        type:[Number],
        required: true
    },
    isDeleted:{
        type: Boolean,
        required: true
    }
});
const Promotion = mongoose.model<IPromotion>('promotion',PromotionSchema);
export default Promotion;