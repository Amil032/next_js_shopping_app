import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../utils/connectToDataBase';
import Products from '../models/Products';
import { products } from '../../src/consts/product';
import { Product } from '../../pages/api/admin/upload';
import { createSquence } from './squence-controller';
export const setProducts = async (data: Product, res: NextApiResponse) => {
  // const { name, count, description, price, credit, source, id, bestselling, newproduct } = req.body;
  await connectToDatabase();
  const id = await createSquence('category');
  let product;
  try {
    product = new Products({...data,id:id.seq});
    product = await product.save();
  } catch (err) {
    console.log(err);
  }
  if (!product) {
    return res.status(500).json('internal server error');
  }
  return res.status(200).json({ message: 'successfuly added', product });
};

export const getProducts = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToDatabase();
  let products;
  try {
    products = await Products.find();
    console.log(products);
  } catch (error) {
    console.log(error);
  }
  if (!products) {
    return res.status(500).json({ message: 'no product found' });
  }
  return res.status(200).json({ products });
};
