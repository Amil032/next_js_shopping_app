import React from 'react'
import { useSelector } from 'react-redux'
import { selectCart, totalAmount } from '../../store/slices/addToCart'
import { CartItem } from './cart-items/CartItem'
import { cart } from '../../consts/cart'
import classes from './Cart.module.css'
import { Button, Card, Paper } from '@mui/material'

export const Cart = () => {
  const cartItems = useSelector(selectCart)
  const total = useSelector(totalAmount)
  return (
    <div className={classes.cart}>
      <h4>SƏBƏT</h4>
      <p>3 məbləğdə mal əlavə etmisiniz 1 439.60</p>
      <div>
        {cartItems.map((item, index) => (
          <CartItem item={item} key={index} />
        ))}
      </div>
      <div style={{ display: 'flex', marginTop: '10px' }}>
        {/* <div style={{ flexGrow: '1' }}></div> */}
        <Paper sx={{ flex: '1' }}>
          <div className={classes.footer}>
            <Button variant='contained' color='error'>
              Sifarisi resmilesdir
            </Button>
            <Button variant='outlined'>1 kilile al</Button>
            <Button variant='outlined'>kreditle almaq</Button>
            <h2>Cemi {total}</h2>
          </div>
        </Paper>
      </div>
    </div>
  )
}
