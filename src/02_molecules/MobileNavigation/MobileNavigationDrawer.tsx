import React, {
  FunctionComponent,
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
  useState
} from 'react'
import { createPortal } from 'react-dom'
import styled, { keyframes, css } from 'styled-components'

import { backgroundColor } from '../../00_quarks/background';
import { alignItem, BOX_ALIGNMENT, justifyContent } from '../../00_quarks/boxalignment';
import { COLORS } from '../../00_quarks/colors';
import { flexboxDirection, flexboxWrap, FLEXBOX_DIRECTION, FLEXBOX_WRAP } from '../../00_quarks/flexbox'
import { bottom, display, LAYOUT_DISPLAY, LAYOUT_POSITION, LAYOUT_ZINDEX, left, position, right, top, zIndex } from '../../00_quarks/layout';
import { margin, padding } from '../../00_quarks/spacing';
import { height, SIZES, width } from '../../00_quarks/sizing'
import { listStyle, LIST_STYLE_TYPE } from '../../00_quarks/typography';
import Animation, { ANIMATION_NAMES } from '../../01_atoms/Animations/Animation';
import Button  from '../../01_atoms/Inputs/Button/Button'
import { useThrottledCallback } from '../../utils/hooks/throttled-callback.hook'

interface MobileDrawerProps extends HTMLAttributes<HTMLElement> {
  absolute?: boolean,
  children: ReactNode[],
  container?: HTMLElement,
  open?: boolean,
  onClose: MouseEventHandler<HTMLButtonElement>,
  slideOut?: boolean,
  delay?: number
}

const slideIn = keyframes`
  0%{
    opacity: 0;
    translate: translateX(-100%);
  }
  1% {
    opacity: 0;
    translate: translateX(0%);
  }
  75% {
    opacity: 1;
    translate: translateX(0%);
  }
  100% {
    opacity: 1;
    translate: translateX(0%);
  }
`

const slideOut = keyframes`
  0% {
    opacity: 1;
    translate: translateX(0%);
  }
  25% {
    opacity: 1;
    translate: translateX(0%);
  }
  99% {
    opacity: 0;
    translate: translateX(0%);
  }
  100% {
    opacity: 0;
    translate: translateX(-100%);
  }
`

const MobileNavigationDrawer: FunctionComponent<MobileDrawerProps> = ({ className, children, container, onClose: handleClose, open }) => {
  if(open) {
    document.body.style.overflow = 'hidden';
    return createPortal(
      <div className={className}>
        <main className='dialog'>
            <Button className='dialog__close' onClick={handleClose}>Close</Button>
            <nav>
              <ul>
                {children.map((child) => 
                  <li>{child}</li>
                )}
              </ul>
            </nav>
        </main>
      </div>
      , container)
  }
  document.body.style.overflow = 'unset';
  return null
}

const StyledMobileDrawer: FunctionComponent<MobileDrawerProps> = styled(MobileNavigationDrawer)`
  ${props => {
    if(props.absolute){
      return (`
        ${position(LAYOUT_POSITION.FIXED)}
        ${top(SIZES.S0)}
        ${left(SIZES.S0)}
        ${bottom(SIZES.S0)}
        ${right(SIZES.S0)}
        ${zIndex(LAYOUT_ZINDEX.Z20)}
      `)
    } else {
      return (`
        ${position(LAYOUT_POSITION.RELATIVE)}
        ${height(SIZES.SCREEN_HEIGHT)}
        ${width(SIZES.FULL)}
      `)
    }
  }}
  ${display(LAYOUT_DISPLAY.FLEX)}
  ${flexboxDirection(FLEXBOX_DIRECTION.FLEX_COL)}
  ${backgroundColor(COLORS.GREY, 0, 1)}
  nav {
    ${display(LAYOUT_DISPLAY.FLEX)}
    ${flexboxDirection(FLEXBOX_DIRECTION.FLEX_COL)}
    ${justifyContent(BOX_ALIGNMENT.CENTER)}
    ${display(LAYOUT_DISPLAY.FLEX)}
  }
  ul {
    ${listStyle(LIST_STYLE_TYPE.NONE)}
    ${padding(SIZES.S10, SIZES.S0)}
    ${margin(SIZES.S0)}
  }
  li {
    ${display(LAYOUT_DISPLAY.FLEX)}
    ${justifyContent(BOX_ALIGNMENT.CENTER)}
  }
  li > * {
    ${display(LAYOUT_DISPLAY.FLEX)}
    ${alignItem(BOX_ALIGNMENT.CENTER)}
    ${height(SIZES.S11)}
    ${padding(SIZES.S0, SIZES.S4)}
  }
  ${Button} {
    ${margin(SIZES.S4)}
  }
`

const MobileDrawerWrapper: FunctionComponent<MobileDrawerProps> = (props) => {
  const { delay } = props
  const [isUnmounted, setIsUnmounted] = useState(false);
  useThrottledCallback(() => setIsUnmounted(true), delay)
  if(isUnmounted) {
    console.log('Unmounted')
    return null
  } else { 
    return (<StyledMobileDrawer {...props} />)
  }
}

StyledMobileDrawer.defaultProps = {
  absolute: true,
  container: document.body,
  delay: 1000,
  open: true
}

export default MobileDrawerWrapper