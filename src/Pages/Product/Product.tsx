import { Card } from '@mui/material'
import { ProductDetails } from '../../components/ProductDetails/ProductDetails'
import classes from './Product.module.css'
export const Product = () => {
  return (
    <div className={classes.main_container}>
      <ProductDetails />
    </div>
  )
}
