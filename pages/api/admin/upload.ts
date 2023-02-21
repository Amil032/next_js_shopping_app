import formidable from 'formidable';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs/promises';
import { readFile } from '../../../api-helper/utils/readFile';
import { setProducts } from '../../../api-helper/controller/product-controller';
import { createSquence } from '../../../api-helper/controller/squence-controller';
export type Product = {
  name: string;
  price: number;
  count: number;
  description: string;
  imageUrl: string;
  category: string;
  subCategory: string;
  isNewproduct: boolean;
  isBestselling: boolean;
  _id?: string;
};
export const config = {
  api: {
    bodyParser: false
  }
};

export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST')
    try {
      await fs.readdir(path.join(process.cwd() + '/public', '/images'));
    } catch (error) {
      await fs.mkdir(path.join(process.cwd() + '/public', '/images'));
    }
  
  let z = await readFile(req, '/public/images', true);
  
  console.log(z.fields);
  console.log({ ...z.files.file }.filepath);
  setProducts({ ...z.fields,imageUrl: { ...z.files.file }.filepath }, res);
}
