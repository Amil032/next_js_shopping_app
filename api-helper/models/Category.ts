import mongoose, { InferSchemaType } from 'mongoose';

const Schema = mongoose.Schema;
const categorySchema = new Schema({
  description: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    require:true
  },
  icon_source: {
    type: String,
    required: true
  },
  sub_categories: [
    {
      id: {
        type: Number,
        require:true
      },
      description: {
        type: String,
        required: true
      },
    }
  ]
});
export type CategryShemaType = InferSchemaType<typeof categorySchema>;

export default mongoose.models.Category || mongoose.model('Category', categorySchema);
