import { Card, CardContent, CardHeader, CardActions, Typography, Box, Button, IconButton, Backdrop } from '@mui/material'
import { CartItems } from './CartItems/CartItems'
import classes from './CartModal.module.css'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import { useSelector } from 'react-redux'
import { selectCart, totalAmount } from '../../store/slices/addToCart'
import Link from 'next/link'
interface Props {
  setVisibility: (data: boolean) => void
  visibility: boolean
}
export const CartModal = ({ setVisibility, visibility }: Props) => {
  const product = useSelector(selectCart)
  const amount = useSelector(totalAmount)
  return (
    <>
      <Backdrop sx={{ color: '#fff', zIndex: '10' }} open={visibility} onClick={() => setVisibility(false)}></Backdrop>
      <Card className={classes.main_container} sx={{ zIndex: '11' }}>
        <div style={{ overflowY: 'scroll' }}>
          <CardHeader
            action={
              <IconButton onClick={() => setVisibility(false)}>
                <CloseOutlinedIcon />
              </IconButton>
            }
            titleTypographyProps={{ fontWeight: 'bolder', color: 'red' }}
            title='Sebet'
          />

          <CardContent>
            {product.length > 0 ? (
              <div>
                {product.map((item, index) => (
                  <CartItems item={item} key={index} />
                ))}
              </div>
            ) : (
              <p style={{ fontSize: '24px', fontWeight: 'bolder', color: 'grey', margin: '0 auto', textAlign: 'center' }}>SƏBƏT BOŞDUR</p>
            )}
          </CardContent>
        </div>
        <CardActions sx={{ backgroundColor: 'white', marginTop: '2px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', padding: '20px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '40px' }}>
              <Typography>Cemi</Typography>
              <Typography>{amount}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Link onClick={() => setVisibility(false)} href='/cart'>
                Sebet
              </Link>
              <Button variant='contained' color='error'>
                Sifarisi resmilewdir
              </Button>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </>
  )
}
