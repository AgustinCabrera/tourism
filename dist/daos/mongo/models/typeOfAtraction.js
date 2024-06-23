"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOfAtractionModel = void 0;
const typeOfAtractionSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        tpye: String,
        required: true,
    }
});
exports.typeOfAtractionModel = mongoose.model('Type of atractions', typeOfAtractionSchema);
