import { Box, Card, CardMedia, IconButton, Typography } from '@mui/material'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import classes from './CartItem.module.css'
import { useDispatch } from 'react-redux'
import { decreaseCount, increaseCount, removeFromCart } from '../../../store/slices/addToCart'
export const CartItem = ({ item }: any) => {
  const dispatch = useDispatch()
  const removeHandler = () => {
    dispatch(removeFromCart(item))
  }
  const increaseCountHandler = () => {
    dispatch(increaseCount(item))
  }
  const decreaseCountHandler = () => {
    dispatch(decreaseCount(item))
  }
  return (
    <Card sx={{ marginBottom: '8px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', margin: '0px', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex' }}>
          <CardMedia component='img' image={item.source} sx={{ width: '100px' }} />
          <Box className={classes.cart_item}>
            <Typography className={classes.cart_item}>{item.description}</Typography>
          </Box>
        </div>
        <div>
          <Typography component='p' variant='h5'>
            {item.price}
          </Typography>
        </div>

        <div className={classes.buttons}>
          <p onClick={decreaseCountHandler}>-</p>
          <input value={item.count} />
          <p onClick={increaseCountHandler}>+</p>
        </div>
        <div>
          <h3>{item.count * item.price}</h3>
        </div>
        <IconButton onClick={removeHandler}>
          <CloseOutlinedIcon sx={{ color: 'red', fontSize: '18px' }} />
        </IconButton>
      </Box>
    </Card>
  )
}
