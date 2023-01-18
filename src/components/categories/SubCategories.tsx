import { Card } from '@mui/material'
import React from 'react'
import { SubCategory } from '../../consts/types/types'
import classes from './Index.module.css'
interface Props {
  show: boolean
  setShow: (data: boolean) => void
  category: SubCategory[] | null
}

export const SubCategories = ({ show, setShow, category }: Props) => {
  return (
    <Card
      sx={{ height: '432px', width: '100%' }}
      onMouseOver={(e) => {
        setShow(true)
      }}
      onMouseOut={() => setShow(false)}
    >
      {category &&
        Object.values(category).map((item, index) => (
          <p className={classes.subcategory_name} key={index}>
            {item.description}
          </p>
        ))}
    </Card>
  )
}
