import formidable from 'formidable';
import fs from 'fs/promises';
import { NextApiRequest } from 'next';
import path from 'path';
export const readFile = (
  req: NextApiRequest,
  folderPath: string,
  saveLocally?: boolean
): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const options: formidable.Options = {};

  if (saveLocally) {
    options.uploadDir = path.join(process.cwd() + folderPath);
    options.filename = (name, ext, part, form) => {
      return Date.now().toString() + '_' + part.originalFilename;
    };
  }
  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        2;
        console.log('error happend');
        reject(err);
      }
      resolve({ fields, files });
    });
  });
};
