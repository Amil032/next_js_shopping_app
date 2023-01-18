import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
// import { red } from '@mui/material/colors';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import { NewProducts } from '../../consts/products'
import { addToCart, removeFromCart, selectCart } from '../../store/slices/addToCart'
import { AddToFavorite } from '../favorite/AddToFavorite'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useRouter } from 'next/router'
interface Props {
  cardItem: NewProducts
}

export const CardElement = ({ cardItem }: Props) => {
  const router = useRouter();
  function clickHandler(id: string) {
    router.push(`/blog/${id}`)
  }

  const dispatch = useDispatch()

  const addToCartHandler = () => {
    if (!check) {
      dispatch(addToCart(cardItem))
    } else {
      dispatch(removeFromCart(cardItem))
    }
  }
  const products = useSelector(selectCart)
  const check = products.find((item) => item.id === cardItem.id)
  return (
    <Card sx={{ width: '317px', margin: '5px 20px' }}>
      <CardHeader action={<AddToFavorite productId={'5'} />} />
      <CardMedia
        component='img'
        height='250'
        src={cardItem.source}
        alt='Paella dish'
        sx={{ width: '45%', margin: '0 auto', objectFit: 'contain' }}
        onClick={clickHandler.bind(this, cardItem.id)}
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {cardItem.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites' onClick={addToCartHandler}>
          <ShoppingCartOutlinedIcon sx={{ color: check ? 'red' : 'inheret' }} />
        </IconButton>
      </CardActions>
    </Card>
  )
}
