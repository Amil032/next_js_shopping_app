import mongoose from 'mongoose';
import { NextApiRequest, NextApiResponse } from 'next';
import { addCategory, deleteCategory, getAllcategories } from '../../api-helper/controller/category-controller';
import { connectToDatabase } from '../../api-helper/utils/connectToDataBase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();
  if (req.method === 'POST') {
    addCategory(req, res);
  } else if (req.method === 'GET') {
    getAllcategories(req, res);
  } else if (req.method === 'DELETE') {
    deleteCategory(req, res);
  }
  // mongoose.connection.close().then(() => console.log('connection closed'));
}
