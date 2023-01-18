import formidable from 'formidable';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs/promises';
const readFile = (req: NextApiRequest, saveLocally?: boolean) => {
  const options: formidable.Options = {};
  const form = formidable(options);
  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), '/public/images');
    options.filename = (name, ext, path, form) => {
      return Date.now().toString() + '_' + path.originalFilename;
    };
  }

  return new Promise((reject, resolve) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};
export default async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST')
    try {
      await fs.readdir(path.join(process.cwd(), '/public', '/images'));
    } catch (error) {
      await fs.mkdir(path.join(process.cwd(), '/public', '/images'));
    }
  await readFile(req, true);
  res.status(200).json({ done: 'OK' });
}

export const config = {
  api: {
    bodyParser: false
  }
};
