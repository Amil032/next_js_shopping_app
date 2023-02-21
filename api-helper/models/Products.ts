import mongoose, { Mongoose } from 'mongoose';
const ProductsSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  count: Number,
  description: {
    type: String,
    require: true
  },
  imageUrl: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
  subCategory: {
    type: String,
    require: true
  },
  isNewproduct: {
    type: Boolean
  },
  isBestselling: {
    type: Boolean,
   
  }
});

export default mongoose.models.Products || mongoose.model('Products', ProductsSchema);
