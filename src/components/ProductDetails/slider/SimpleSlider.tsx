import React, { Component } from 'react'
import Slider from 'react-slick'
import { newProducts } from '../../../consts/products'
import { SampleNextArrow, SamplePrevArrow } from './arrows/Arrows'
import classes from './Slider.module.css'
export const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: classes.slider,
    adaptiveHeight: true,
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <h2> Single Item</h2>
      <Slider {...settings}>
        {newProducts.map((item, index) => (
          <div className={classes.wrapper} id='warpper' key={index}>
            <img src={`../${item.source}`} style={{ width: '100%', height: '80%', objectFit: 'contain' }} />
          </div>
        ))}
      </Slider>
    </div>
  )
}
