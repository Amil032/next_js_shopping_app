import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import { Slider } from '../../Slider/Slider'
import { SimpleSlider } from '../slider/SimpleSlider'
import classes from './ImageModal.module.css'
import useWindowDimensions from '../../hooks/getScreenSize'
const style = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',

  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadius: '40px',
  boxShadow: 24,
  p: 4,
  // backgroundColor: 'yellow',
  overFlow: 'scroll'
}
interface Props {
  open: boolean
  handleClose: (data: boolean) => void
}
export const ImageModal = ({ open, handleClose }: Props) => {
  const { width } = useWindowDimensions()
  return (
    <div>
      <Modal
        open={width > 900 ? open : false}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        className={classes.container}
      >
        <Box sx={style}>
          <SimpleSlider />
          <div>
            <h3>qiymet</h3>
            <Button variant='contained' color='error'>
              elave et
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
