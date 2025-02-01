// models/User.mjs

import mongoose from 'mongoose';

const coachesSchema = new mongoose.Schema({
  name: String,
  contact: String,
  dateOfJoin: String,
});

export default mongoose.model('Coaches', coachesSchema);
