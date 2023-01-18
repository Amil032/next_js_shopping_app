import React, { useState } from 'react'
import { Slider } from '../../components/Slider/Slider'
import { Catalog } from '../../components/categories/Catalog'
import { SubCategories } from '../../components/categories/SubCategories'
import { NewProduct } from '../../components/NewProducts/NewProducts'
import { BestSellingProducts } from '../../components/BestSelling/BestSellingProducts'
import classes from './Home.module.css'
import { SubCategory } from '../../consts/types/types'
import { Category } from '../../types/types'
interface Props {
  categories: Category[]
}
export const Home: React.FunctionComponent<Props> = ({ categories }) => {
  const [show, setShow] = useState(false)
  const [category, setCategory] = useState<SubCategory[] | null>(null)

  const a = useState(false)
  console.log(categories)
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
      <NewProduct />
      <BestSellingProducts />
    </div>
  )
}
