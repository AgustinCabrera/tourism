"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtractionModel = void 0;
const AtractionSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    tickets: {
        type: Number,
        required: true
    },
    cost: {
        type: Float32Array,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    atractionTypeId: {
        type: Number,
        required: true
    },
    is_deleted: {
        type: Boolean,
        required: true
    }
});
exports.AtractionModel = mongoose.model('atraction', AtractionSchema);
