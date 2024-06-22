"use strict";
const typeOfAtraction = new Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        tpye: String,
        required: true,
    }
});
module.exports = mongoose.model('Type of atractions', typeOfAtraction);
