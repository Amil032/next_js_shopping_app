import React, { useEffect } from 'react'
import { NewProducts, newProducts } from '../../consts/products'
import { CardElement } from '../Card/CardElement'
import { Scroll } from '../Scroll/Scroll'
import classes from './BestSellingProducts.module.css'

export const BestSellingProducts = () => {
  const header = (
    <div style={{ color: 'black' }}>
      <h1>Best selling products</h1>
    </div>
  )

  return (
    <div className={classes.bestSelling}>
      <Scroll header={header}>
        {newProducts.map((item: NewProducts, index) => (
          <CardElement cardItem={item} key={index} />
        ))}
      </Scroll>
    </div>
  )
}
