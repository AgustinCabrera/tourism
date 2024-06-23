const AtractionPromotionSchema = () => new mongoose.Schema({
    atractionId:{
        type: Number,
        required: true
    },
    promotionId:{
        type: Number,
        required: true
    }});
export const AtractionPromotionModel = mongoose.model('atraction Promotion', AtractionPromotionSchema);