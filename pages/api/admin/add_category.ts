import formidable from 'formidable';
import fs from 'fs/promises';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { addCategory } from '../../../api-helper/controller/category-controller';
import { readFile } from '../../../api-helper/utils/readFile';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await fs.readdir(path.join(process.cwd(), '/public' + '/icons'));
  } catch (error) {
    await fs.mkdir(path.join(process.cwd() + '/public', '/icons'));
  }
  const category = await readFile(req, '/public/icons', true);

  console.log(category);
  await addCategory({ ...category.fields, icon_source: { ...category.files.file }.filepath }, res);
}

export const config = {
  api: {
    bodyParser: false
  }
};
