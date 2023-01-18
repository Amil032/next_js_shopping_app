import React, { FC, ReactNode } from 'react'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import { NewProducts } from '../../consts/products'
import { LeftArrow } from './Arrows'
import { RightArrow } from './Arrows'
import classes from './Scroll.module.css'
import { CardElement } from '../Card/CardElement'

interface Props {
  children?: ReactNode
  header: JSX.Element
}
export const Scroll: React.FunctionComponent<Props> = ({ children, header }) => {
  return (
    <ScrollMenu
      Header={header}
      // Footer={<div>FOOTER</div>}
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      onWheel={onWheel}
      transitionBehavior='smooth'
      noPolyfill
      wrapperClassName={classes.wrapper}
      scrollContainerClassName={classes.scrollContainer}
    >
      {children}
    </ScrollMenu>
  )
}
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>
function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15

  if (isThouchpad) {
    ev.stopPropagation()
    return
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext()
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev()
  }
}
