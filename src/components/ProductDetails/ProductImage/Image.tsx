import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import classes from './Image.module.css'
import { products } from '../../../consts/product'
import { useState } from 'react'
import { NewProducts } from '../../../consts/products'

interface Props {
  product: NewProducts[]
  handleOpen: (data: boolean) => void
}

export const Image = ({ product, handleOpen }: Props) => {
  // product && console.log(product[0]?.source)
  const settings = {
    customPaging: function (i: number) {
      return (
        <div>
          <img src={`../${product[i]?.source}`} style={{ width: '50px' }} />
        </div>
      )
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: `  ${classes.paging}`,
    arrows: false
  }
  return (
    <div>
      <Slider {...settings}>
        {product.map((item, index) => (
          <div style={{ backgroundColor: 'blue' }} key={index}>
            <img src={`../${item.source}`} style={{ margin: '0px auto', maxWidth: '70%' }} onClick={() => handleOpen(true)} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
