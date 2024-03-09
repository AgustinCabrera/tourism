"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attractionPromotionModel = void 0;
const mongoose_1 = require("mongoose");
const attractionPromotionSchema = new mongoose_1.Schema({
    id: {
        type: Number,
        required: true
    },
    promotionId: {
        type: Number,
        required: true
    },
});
exports.attractionPromotionModel = (0, mongoose_1.model)('attractionPromotion', attractionPromotionSchema);
