// models/User.mjs

import mongoose from 'mongoose';

const planSchema = new mongoose.Schema({
  name: String,
  validity: String,
  amount: String,
});

export default mongoose.model('Plans', planSchema);
