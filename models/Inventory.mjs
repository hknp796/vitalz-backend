// models/User.mjs

import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
  name: String,
  count: Number,
  status: String,
});

export default mongoose.model('Inventory', inventorySchema);
