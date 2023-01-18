export const newProducts: NewProducts[] = [
  {
    name: 'shoes',
    count: 1,
    description: 'Aromalasdirici Areon Fresh Wave',
    price: 67,
    credit: 'ayda 0.19',
    source: 'assests/products/product1.jpg',
    id: '1'
  },
  {
    name: 'shoes',
    count: 1,
    description: 'Aromalasdirici Areon Fresh Wave',
    price: 45,
    credit: 'ayda 0.19',
    source: 'assests/newproducts2.webp',
    id: '2'
  },
  {
    name: 'shoes',
    count: 1,
    description: 'Aromalasdirici Areon Fresh Wave',
    price: 48,
    credit: 'ayda 0.19',
    source: 'assests/newproducts3.webp',
    id: '3'
  },
  {
    name: 'shoes',
    count: 1,
    description: 'Aromalasdirici Areon Fresh Wave',
    price: 26,
    credit: 'ayda 0.19',
    source: 'assests/newproducts4.webp',
    id: '4'
  },
  {
    name: 'shoes',
    count: 1,
    description: 'Aromalasdirici Areon Fresh Wave',
    price: 110,
    credit: 'ayda 0.19',
    source: 'assests/newproducts5.png',
    id: '5'
  },
  {
    name: 'shoes',
    count: 1,
    description: 'Aromalasdirici Areon Fresh Wave',
    price: 145,
    credit: 'ayda 0.19',
    source: 'assests/newproducts6.png',
    id: '6'
  },
  {
    name: 'shoes',
    count: 1,
    description: 'Aromalasdirici Areon Fresh Wave',
    price: 112,
    credit: 'ayda 0.19',
    source: 'assests/newproducts7.png',
    id: '7'
  }
];
export interface NewProducts {
  name: string;
  description: string;
  price: number;
  credit: string;
  source: string;
  id: string;
  count: number;
}
