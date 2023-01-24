import React, { useEffect, useState } from 'react'
import { Slider } from '../../components/Slider/Slider'
import { Catalog } from '../../components/categories/Catalog'
import { SubCategories } from '../../components/categories/SubCategories'
import { NewProduct } from '../../components/NewProducts/NewProducts'
import { BestSellingProducts } from '../../components/BestSelling/BestSellingProducts'
import classes from './Home.module.css'
import { SubCategory } from '../../consts/types/types'
import { Category } from '../../types/types'
import { getCategories } from '../../api/services/categories.service'
import { Product } from '../../../pages/api/admin/upload'
interface Props {
  categories: Category[];
  products: Product[]
}
export const Home: React.FunctionComponent<Props> = ({ categories, products }) => {
  const [show, setShow] = useState(false)
  const [category, setCategory] = useState<SubCategory[] | null>(null)
  console.log(products, 'home page')
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} className={classes.container}>
      <div className={classes.catalogueSLiderWrapper}>
        <Catalog show={show} setShow={setShow} setCategory={setCategory} />

        {show ? (
          <SubCategories show setShow={setShow} category={category} />
        ) : (
          <div className={classes.slider}>
            <Slider />
          </div>
        )}
      </div>
      <NewProduct products={products} />
      <BestSellingProducts products={products} />
    </div>
  )
}
