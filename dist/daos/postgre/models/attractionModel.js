"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttractionModel = void 0;
const mongoose_1 = require("mongoose");
const attractionSchema = new mongoose_1.Schema({
    id: {
        type: Number,
        required: true
    },
    tickets: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    time: {
        type: Number,
        required: true
    },
    attraction_type_id: {
        type: Number,
        required: true
    },
    is_deleted: {
        type: Boolean,
        default: false
    }
});
exports.AttractionModel = (0, mongoose_1.model)('attraction', attractionSchema); //
