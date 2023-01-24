import mongoose, { Mongoose } from 'mongoose';
const ProductsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  count: Number,
  description: String,
  imageUrl: String,
  category: String,
  subCategory: String,
  isNewproduct: Boolean,
  isBestselling: Boolean
});

export default mongoose.models.Products || mongoose.model('Products', ProductsSchema);
