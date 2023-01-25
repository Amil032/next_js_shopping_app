import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
interface Props {
  width?: string
}
export default function CustomizedInputBase({ width }: Props) {
  return (
    <Paper component='form' sx={{ display: 'flex', alignItems: 'center', height: 40 }} style={{ width: width ? width : 'auto' }}>
      <InputBase sx={{ ml: 1, flex: 1 }} placeholder='Search' />
      <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}
