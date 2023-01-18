import { NextApiRequest, NextApiResponse } from 'next';
import { setProducts } from '../../../api-helper/controller/product-controller';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await setProducts(req, res);
  }
}
