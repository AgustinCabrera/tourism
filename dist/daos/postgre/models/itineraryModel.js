"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itineraryModel = void 0;
const mongoose_1 = require("mongoose");
const itinerarySchema = new mongoose_1.Schema({
    id: {
        type: Number,
        required: true
    },
    userID: {
        type: Number,
        required: true
    },
    attractionID: {
        type: Number,
        required: true
    },
});
exports.itineraryModel = (0, mongoose_1.model)('itineraryModel', itinerarySchema);
