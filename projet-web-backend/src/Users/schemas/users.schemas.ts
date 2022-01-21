import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
    pseudo: String,
    email: String,
    hashPassword: String,
    description: String,
    created_at: { type: Date, default: Date.now }
})