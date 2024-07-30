// models/User.mjs

import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  age: String,
  contact: String,
  gender: String,
  dateOfJoining: String,
  dateOfBirth: String,
  amount:Number,
  month:String
});

export default mongoose.model('Members', memberSchema);
