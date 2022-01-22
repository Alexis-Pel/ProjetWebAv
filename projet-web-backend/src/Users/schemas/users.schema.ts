import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  pseudo: String,
  email: String,
  description: String,
  img: String,
  hashPassword: String,
  created_at: { type: Date, default: Date.now },
});
