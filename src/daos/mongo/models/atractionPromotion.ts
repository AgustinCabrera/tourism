import mongoose, {Document,Schema} from 'mongoose'
export interface IatractionPromotion extends Document{
    atractionId: number;
    promotionId:number;
}
const AtractionPromotionSchema = new Schema<IatractionPromotion>({
    atractionId:{
        type: Number,
        required: true
    },
    promotionId:{
        type: Number,
        required: true
    }});
const AtractionPromotion = mongoose.model<IatractionPromotion>('atraction Promotion', AtractionPromotionSchema);
export default AtractionPromotion;