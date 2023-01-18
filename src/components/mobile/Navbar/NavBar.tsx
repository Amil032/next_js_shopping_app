import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import Badge from '@mui/material/Badge'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import AccountCircle from '@mui/icons-material/AccountCircle'

import NotificationsIcon from '@mui/icons-material/Notifications'
import { DrawerNavigation } from '../DrawwerNavigation'
import { Dispatch, SetStateAction, useState } from 'react'
import { CartIcon } from '../../Header/NavbarDown/cart-icon-badge/CartIcon'
import { Router, SearchOutlined } from '@mui/icons-material'
import { SearchModal } from '../search/SearchModal'
import { routes } from '../../../consts/navigation-consts'
import { useNavigate } from 'react-router-dom'
import { CartModal } from '../../cart-modal/CartModal'
import { useRouter } from 'next/router'
interface Props {
  visibility: boolean
  setVisibility: Dispatch<SetStateAction<boolean>>
}
export const NavBarMobile = ({ visibility, setVisibility }: Props) => {
  const [show, setShow] = useState(false)
  const [searchVisibility, setSearchVisibility] = useState(false)
  const searchVisibilityHandler = () => {
    setSearchVisibility((prev) => !prev)
  }
  // const navigate = useNavigate()
  const router = useRouter()
  return (
    <Box sx={{ position: 'sticky', top: '0', zIndex: '6' }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' sx={{ backgroundColor: '#3c3f42' }}>
          <Toolbar sx={{ backgroundColor: '#3c3f42' }}>
            <IconButton size='large' edge='start' color='inherit' aria-label='open drawer' sx={{ mr: 2 }} onClick={() => setShow(true)}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' noWrap component='div' sx={{ display: { sm: 'block' } }} onClick={() => router.push('/')}>
              MiniMaks
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ overflow: 'hidden', justifyContent: 'center', alignitems: 'center' }}>
              <IconButton size='large' color='inherit' onClick={searchVisibilityHandler}>
                {/* <AccountCircle /> */}
                <SearchOutlined />
              </IconButton>


              <CartIcon onClickHandler={() => setVisibility((prev) => !prev)} />


              <IconButton size='large' color='inherit'>
                <Badge badgeContent={17} color='error'>
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <DrawerNavigation show={show} setShow={setShow} items={routes} />
      {searchVisibility && <SearchModal searchVisibilityHandler={searchVisibilityHandler} />}
      {visibility && <CartModal setVisibility={setVisibility} visibility={visibility} />}
    </Box>
  )
}
