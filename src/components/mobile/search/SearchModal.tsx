import React from 'react'

import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, Paper } from '@mui/material'
import { CloseOutlined } from '@mui/icons-material'
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto'
  }
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  }
}))
interface Props {
  searchVisibilityHandler: () => void
}
export const SearchModal = ({ searchVisibilityHandler }: Props) => {
  return (
    <Paper
      style={{
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        top: '0px',
        zIndex: '7',
        height: '65px',
        borderRadius: '0px'
      }}
    >
      <IconButton onClick={searchVisibilityHandler} sx={{ position: 'absolute', top: '5px', right: '5px', zIndex: '8' }}>
        <CloseOutlined />
      </IconButton>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} />
      </Search>
    </Paper>
  )
}
