import { instance } from '../axios';

export const getCategories = async () => {
  let z = await instance.get('/api/category');
  return z.data;
};
