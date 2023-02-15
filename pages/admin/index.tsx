
import axios from 'axios';
import Modal from '../../src/components/admin/reusable-components/modal/Modal';
import { AddProducts } from '../../src/components/admin/products/AddProducts';
import { Wrapper } from '../../src/components/admin/wrapper/Wrapper';
import { CategoryProps } from '../../src/types/types';
import Search from '../../src/components/Header/NavbarDown/Search';
import { Tables } from '../../src/components/admin/table/Table';
import { getAllProducts } from '../../src/api/services/products.service';
import { Product } from '../api/admin/upload';
import { PaginationControlled } from '../../src/components/admin/pagination/Pagination';
interface Props {
  categories: CategoryProps
  products: { products: Product[] }
}
export default function Admin({ categories, products }: Props) {
  console.log(products.products)
  return (
    <Wrapper>
      <div style={{ display: "flex", padding: '5px', boxSizing: 'border-box', width: '100%', justifyContent: 'center', paddingTop: '50px', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
          <Search width="50%" />
          <div style={{
            display: 'flex', width: '50%',
            justifyContent: 'flex-end', padding: '20px 0', boxSizing: 'border-box'
          }}>
            <AddProducts categories={categories} />
          </div>

        </div>
        <div style={{ height: '80%', padding: '40px 20px', overflowY: 'scroll', marginTop: '20px' }}>
          <Tables products={products.products} />
        </div>
        <div style={{ margin: '0 auto' }}>
          <PaginationControlled count={5} />
        </div>
      </div>
    </Wrapper>
  )
}
export async function getStaticProps() {
  const getAllCategories = async () => {
    const data = await axios.get("http://localhost:3000/api/category");
    const res = await data.data
    return res
  }
  const getProducts = async () => {
    const products = await getAllProducts()
    return products
  }

  const products = await getProducts()
  const data = await getAllCategories()

  return {
    props: {
      categories: data,
      products: products
    }
  }
}
