import mongoose, { Schema, models, model } from 'mongoose';

const squenceSchema = new Schema({
  id: {
    type: String
  },
  seq: {
    type: Number
  }
});

export default mongoose.models.Squence || mongoose.model('Squence', squenceSchema);
