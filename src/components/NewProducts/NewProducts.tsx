import { Scroll } from '../Scroll/Scroll'
import { NewProducts, newProducts } from '../../consts/products'
import classes from './NewProducts.module.css'
import { CardElement } from '../Card/CardElement'
import { Product } from '../../../pages/api/admin/upload';
interface Props {
  products: Product[];
}
export const NewProduct = ({ products }: Props) => {
  const header = (
    <div style={{ color: 'black' }}>
      <h1>New products</h1>
    </div>
  )
  return (
    <div className={classes.container}>
      <Scroll header={header}>
        {products?.map((item, index) => (
          item.isNewproduct ?
            <CardElement cardItem={item} key={index} />
            : null
        ))}
      </Scroll>
    </div>
  )
}
