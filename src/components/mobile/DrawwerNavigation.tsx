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
import { useState } from 'react'
import { RoutesType } from '../../consts/navigation-consts'
import { useRouter } from 'next/router'
import { Router } from '@mui/icons-material'

interface Props {
  show: boolean
  setShow: (data: boolean) => void
  items: RoutesType
}
export const DrawerNavigation = ({ show, setShow, items }: Props) => {
  // const navigate = useNavigate()
  const router = useRouter()
  console.log(items)
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return
    }

    setShow(open)
  }

  const list = () => (
    <Box sx={{ width: '200px' }} role='presentation' onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {items.map((text, index) => (
          <ListItem key={text[0]} disablePadding>
            <ListItemButton onClick={() => router.push(`${text[1]}`)}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text[1]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
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
