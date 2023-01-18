import mongoose, { InferSchemaType } from 'mongoose';

const Schema = mongoose.Schema;
const categorySchema = new Schema({
  description: {
    type: String,
    required: true
  },
  icon_source: {
    type: String,
    required: true
  },
  sub_categories: [
    {
      description: {
        type: String,
        required: true
      }
    }
  ]
});
export type CategryShemaType = InferSchemaType<typeof categorySchema>;

export default mongoose.models.Category || mongoose.model('Category', categorySchema);
