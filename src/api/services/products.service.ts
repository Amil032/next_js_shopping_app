import axios from 'axios';
import { instance } from '../axios';

export const getAllProducts = async () => {
  const products = await instance.get('/api/products');
  return products.data;
};
