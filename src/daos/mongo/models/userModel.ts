const userSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    gold: {
        type: Float32Array,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    preferred_attraction_type_id: {
        type: Number,
        required: true
    },
    is_admin: {
        type: Boolean,
        required:true
    }
    });
export const userModel = mongoose.model('user', userSchema);