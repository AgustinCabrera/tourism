"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtractionPromotionModel = void 0;
const AtractionPromotionSchema = () => new mongoose.Schema({
    atractionId: {
        type: Number,
        required: true
    },
    promotionId: {
        type: Number,
        required: true
    }
});
exports.AtractionPromotionModel = mongoose.model('atraction Promotion', AtractionPromotionSchema);
