import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  pseudo: String,
  email: String,
  description: String,
  img: String,
  created_at: { type: Date, default: Date.now },
});
