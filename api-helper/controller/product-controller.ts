import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../utils/connectToDataBase';
import Products from '../models/Products';
import { products } from '../../src/consts/product';
export const setProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, count, description, price, credit, source, id, bestselling, newproduct } = req.body;
  await connectToDatabase();
  let product;
  try {
    product = new Products({ name, count, description, price, credit, source, id, bestselling, newproduct });
    product = await product.save();
  } catch (err) {
    console.log(err);
  }
  if (!product) {
    return res.status(500).json('internal server error');
  }
  return res.status(200).json({ message: 'successfuly added', product });
};
