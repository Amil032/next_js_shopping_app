import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
export const Slider = () => {
  const items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
      source: '../../assests/slider1.png'
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
      source: '../../assests/slider2.png'
    }
  ]

  return (
    <Carousel height='400px'>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  )
}

function Item(props: any) {
  return (
    <Paper>
      <img src={props.item.source} />
    </Paper>
  )
}
