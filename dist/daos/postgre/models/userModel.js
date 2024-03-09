"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    id: {
        type: Number,
        required: true
    },
    usernames: {
        type: String,
        required: true
    },
    passwords: {
        type: String,
        required: true
    },
    gold: {
        type: Number,
        required: true,
        unique: true
    },
    available_time: {
        type: Number,
        required: true
    },
    preferred_attraction_type_id: {
        type: Number,
        required: true
    },
    is_admin: {
        type: Boolean,
        default: false
    }
});
exports.UserModel = (0, mongoose_1.model)('users', userSchema);
