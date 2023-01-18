import React from 'react'
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import { VisibilityContext } from 'react-horizontal-scrolling-menu'

function Arrow({ children, disabled, onClick }: { children: React.ReactNode; disabled: boolean; onClick: VoidFunction }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      style={{
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        right: '1%',
        opacity: disabled ? '0' : '1',
        userSelect: 'none',
        backgroundColor: 'white',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: 'none',
        boxShadow: '1px 1px 5px 1px #9f9a9a6e',
        color: 'grey'
      }}
    >
      {children}
    </button>
  )
}

export function LeftArrow() {
  const { isFirstItemVisible, visibleItemsWithoutSeparators, scrollToItem, initComplete, getPrevItem } = React.useContext(VisibilityContext)

  const [disabled, setDisabled] = React.useState(!initComplete || (initComplete && isFirstItemVisible))
  React.useEffect(() => {
    // NOTE: detect if whole component visible
    if (visibleItemsWithoutSeparators.length > 0) {
      setDisabled(isFirstItemVisible)
    }
  }, [isFirstItemVisible, visibleItemsWithoutSeparators])
  const clickHandler = () => {
    const prevItem = getPrevItem()
    scrollToItem(prevItem?.entry?.target, 'smooth', 'start')
  }
  return (
    <div style={{ position: 'absolute', left: '10px', top: '250px', zIndex: '3' }}>
      <Arrow disabled={disabled} onClick={clickHandler}>
        <ArrowBackOutlinedIcon />
      </Arrow>
    </div>
  )
}

export function RightArrow() {
  const { isLastItemVisible, getNextItem, scrollToItem, visibleItemsWithoutSeparators } = React.useContext(VisibilityContext)

  // console.log({ isLastItemVisible });
  const [disabled, setDisabled] = React.useState(visibleItemsWithoutSeparators.length === 0 && isLastItemVisible)
  React.useEffect(() => {
    if (visibleItemsWithoutSeparators.length > 0) {
      setDisabled(isLastItemVisible)
    }
  }, [isLastItemVisible, visibleItemsWithoutSeparators])
  const clickHandler = () => {
    const nextItem = getNextItem()
    scrollToItem(nextItem?.entry?.target, 'smooth', 'end')
  }
  return (
    <div style={{ position: 'absolute', right: '10px', top: '250px' }}>
      <Arrow disabled={disabled} onClick={clickHandler}>
        <ArrowForwardOutlinedIcon />
      </Arrow>
    </div>
  )
}
