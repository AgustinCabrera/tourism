    import mongoose, { Document, Schema } from 'mongoose';

    export interface IUser extends Document {
    username: string;
    password: string;
    gold: number;
    available_time: number;
    preferred_attraction_type_id: string;
    is_admin: boolean;
    }

    const userSchema = new Schema<IUser>({
    username: { type: String, required: true },
    password: { type: String, required: true },
    gold: { type: Number, required: true },
    available_time: { type: Number, required: true },
    preferred_attraction_type_id: { type: String, required: true },
    is_admin: { type: Boolean, required: true },
    });

    const User = mongoose.model<IUser>('User', userSchema);
    export default User;
