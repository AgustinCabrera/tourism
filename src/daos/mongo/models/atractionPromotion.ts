const atractionPromotion = new Schema({
    atractionId:{
        type: Number,
        required: true
    },
    promotionId:{
        type: Number,
        required: true
    }

});
module.exports = mongoose.model('atraction Promotion', atractionPromotion);