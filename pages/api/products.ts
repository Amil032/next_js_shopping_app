import { NextApiRequest, NextApiResponse } from 'next';
import { getProducts, setProducts } from '../../api-helper/controller/product-controller';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    await getProducts(req, res);
  }
}
