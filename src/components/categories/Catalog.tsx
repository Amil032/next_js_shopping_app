import { Card } from '@mui/material'
import React, { FC, useState } from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import classes from './Index.module.css'
import { useSelector } from 'react-redux'
import { allCategories } from '../../store/slices/categories'
import { Category, SubCategory } from '../../consts/types/types'

interface Props {
  show: boolean
  setShow: (data: boolean) => void
  setCategory: (data: SubCategory[] | null) => void
}

export const Catalog: FC<Props> = ({ setShow, setCategory }) => {
  const categories = useSelector(allCategories)
  const [id, setId] = useState<number | null>(null)
  return (
    <Card
      sx={{
        height: '432px',
        backgroundColor: 'white',
        minWidth: '314px',
        padding: '0'
      }}
      className={classes.category}
    >
      <div>
        {categories?.map((item: Category) => (
          <div
            key={item.category_id}
            style={{ display: 'flex', justifyContent: 'space-between', padding: '5px' }}
            onMouseOver={() => {
              setShow(true)
              setCategory(item.subcatories)
            }}
            onMouseOut={() => setShow(false)}
          >
            <div className={classes.category_name}>
              <img src={`assests/icons/${item.icon_source}`} alt='icons' width='20px' />
              <p style={{ marginLeft: '20px' }}>{item.description}</p>
            </div>

            <div>
              <ChevronRightIcon />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
