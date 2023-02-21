import mongoose, { InferSchemaType } from 'mongoose';

const Schema = mongoose.Schema;
const SubCategorySchema = new Schema({
  description: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
});
export type SubCategryShemaType = InferSchemaType<typeof SubCategorySchema>;

export default mongoose.models.SubCategory || mongoose.model('SubCategory', SubCategorySchema);
