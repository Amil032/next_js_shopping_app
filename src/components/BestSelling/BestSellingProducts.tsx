import { Scroll } from '../Scroll/Scroll'
import classes from './BestSellingProducts.module.css'
import { CardElement } from '../Card/CardElement'
import { Product } from '../../../pages/api/admin/upload';
interface Props {
  products: Product[];
}
export const BestSellingProducts = ({ products }: Props) => {
  const header = (
    <div style={{ color: 'black' }}>
      <h1>Best selling products</h1>
    </div>
  )
  return (
    <div className={classes.bestSelling}>
      <Scroll header={header}>
        {products?.map((item, index) => (
          item.isBestselling ?
            <CardElement cardItem={item} key={index} />
            : null
        ))}
      </Scroll>
    </div>
  )
}
