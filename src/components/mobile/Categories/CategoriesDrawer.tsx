import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import { SyntheticEvent, useEffect, useState } from 'react'
import { RoutesType } from '../../../consts/navigation-consts'
import { IconButton } from '@mui/material'
import { ChevronLeft, CloseOutlined } from '@mui/icons-material'
import { catalogItems, subCategories } from '../../../consts/catalog'
import { useRouter } from 'next/router'
interface Props {
  show: boolean
  setShow: (data: boolean) => void
  // items: RoutesType
}
export const CategoriesDrawer = ({ show, setShow }: Props) => {
  const [backButtonShow, setBackButtonShow] = useState(false)
  // const navigate = useNavigate()
  const router = useRouter()
  const [update, setUpdate] = useState(catalogItems)
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setBackButtonShow(false)
    setUpdate(catalogItems)
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return
    }

    setShow(open)
  }
  const clickHandler = (e: SyntheticEvent) => {
    const { id } = e.currentTarget
    setBackButtonShow(true)
    for (const item in subCategories) {
      if (item === id) {
        setUpdate(subCategories[item])
      }
    }

    console.log(id)
  }
  const list = () => (
    <Box
      sx={{ width: '75vw' }}
      role='presentation'
    // onClick={toggleDrawer(false)}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-evenly' }}>
        <IconButton onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <CloseOutlined />
        </IconButton>
        {backButtonShow && (
          <IconButton
            onClick={() => {
              setBackButtonShow(false)
              setUpdate(catalogItems)
            }}
          >
            <ChevronLeft />
            <p style={{ fontSize: '14px' }}>back</p>
          </IconButton>
        )}
      </div>

      <List>
        {update.map((text, index) => (
          <ListItem key={text.name} disablePadding id={text.name} onClick={clickHandler}>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text.description} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding onClick={clickHandler}>
            <ListItemButton>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div>
      <Drawer anchor={'left'} open={show} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  )
}
