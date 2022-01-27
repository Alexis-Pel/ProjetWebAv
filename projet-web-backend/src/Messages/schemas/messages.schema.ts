import * as mongoose from 'mongoose';

export const MessagesSchema = new mongoose.Schema({
  messages: Array,
  name: String,
  attendees: Array,
  img:String
});
