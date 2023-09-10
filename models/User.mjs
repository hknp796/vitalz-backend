// models/User.mjs

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  // Add other fields as needed
});

export default mongoose.model('User', userSchema);
