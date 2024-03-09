import { Schema, model } from "mongoose";

const userSchema = new Schema({
    id:{
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

export const UserModel = model('users', userSchema);