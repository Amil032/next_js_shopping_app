import { NextApiRequest, NextApiResponse } from 'next';
import { addSubCategory } from '../../../api-helper/controller/category-controller';
import { createSquence } from '../../../api-helper/controller/squence-controller';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
   
    await addSubCategory(req, res);
  }
}
