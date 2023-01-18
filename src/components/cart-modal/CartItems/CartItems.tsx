import { Box, Card, CardMedia, IconButton, Typography } from '@mui/material'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import classes from './CartItem.module.css'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../../store/slices/addToCart'

export const CartItems = ({ item }: any) => {
  // cobst cartItems=useSelector(selectCart)
  const dispatch = useDispatch()
  const removeHandler = () => {
    dispatch(removeFromCart(item))
  }
  return (
    <Card sx={{ marginTop: '8px' }}>
      <Box sx={{ display: 'flex', position: 'relative' }}>
        <CardMedia component='img' image={item.source} sx={{ width: '13%', margin: '10px' }} />
        <Box className={classes.cart_item}>
          <Typography className={classes.cart_item}>{item.description}</Typography>
          <Typography component='p' variant='h5'>
            {item.price}
          </Typography>
          <Typography>{item.count} ed</Typography>
        </Box>
        <IconButton sx={{ position: 'absolute', right: '4px', top: '4px' }} onClick={removeHandler}>
          <CloseOutlinedIcon sx={{ color: 'red', fontSize: '18px' }} />
        </IconButton>
      </Box>
    </Card>
  )
}
