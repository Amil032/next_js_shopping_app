import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { IconButton } from '@mui/material'
interface Props {
  productId: string
}
export const AddToFavorite = ({ productId }: Props) => {
  const favoriteHandler = () => {
    console.log(productId)
  }
  return (
    <IconButton onClick={favoriteHandler}>
      <FavoriteBorderIcon />
    </IconButton>
  )
}
