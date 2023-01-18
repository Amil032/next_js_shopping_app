import { Scroll } from '../Scroll/Scroll'
import { NewProducts, newProducts } from '../../consts/products'
import classes from './NewProducts.module.css'
import { CardElement } from '../Card/CardElement'
export const NewProduct = () => {
  const header = (
    <div style={{ color: 'black' }}>
      <h1>New products</h1>
    </div>
  )
  return (
    <div className={classes.container}>
      <Scroll header={header}>
        {newProducts.map((item, index) => (
          <CardElement cardItem={item} key={index} />
        ))}
      </Scroll>
    </div>
  )
}
