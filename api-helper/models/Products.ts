import mongoose, { Mongoose } from 'mongoose';
const ProductsSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  credit: String,
  source: String,
  id: String,
  count: Number,
  newproduct: Boolean,
  bestselling: Boolean
});

export default mongoose.models.Products || mongoose.model('Products', ProductsSchema);
