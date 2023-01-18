import { Details } from './Details/Details'
import { Image } from './ProductImage/Image'
import classes from './ProductDetails.module.css'
import { Features } from './Features/Features'
import { Card, Paper } from '@mui/material'
import { newProducts } from '../../consts/products'
import { ImageModal } from './ImageModal/ImageModal'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
export const ProductDetails = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const product = newProducts.filter((item) => item.id === router.query.id)
  return (
    <div style={{ display: 'flex', marginTop: '20px', flexDirection: 'column' }}>
      <Paper style={{ display: 'flex', marginBottom: '40px' }} className={classes.details}>
        <div className={classes.image}>
          <Image product={product} handleOpen={handleOpen} />
        </div>
        <Details product={product[0]} />
      </Paper>
      <ImageModal open={open} handleClose={handleClose} />
      <Features />
    </div>
  )
}
