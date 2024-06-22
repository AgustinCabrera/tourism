"use strict";
const promotion = new Schema({
    id: {
        type: Number,
        required: true
    },
    promotionType: {
        type: String,
        required: true,
    },
    pricingStrategy: {
        type: String,
        required: true
    },
    costOrDiscount: {
        type: Float32Array,
        required: true
    },
    isDeleted: {
        type: Boolean,
        required: true
    }
});
module.exports = mongoose.model('promotion', promotion);
