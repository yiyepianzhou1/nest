import { Schema } from 'mongoose';

export const userSchema = new Schema({
  user_name: { type: String, required: true },
  password: { type: String, required: true },
  user_id: { type: Number, required: true },
});
