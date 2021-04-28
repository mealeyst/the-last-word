import React, { FunctionComponent, ReactNode} from 'react'
import styled, { keyframes, css } from 'styled-components'
import { backgroundColor } from '../00_quarks/background';
import { alignItem, BOX_ALIGNMENT, justifyContent } from '../00_quarks/boxalignment';
import { COLORS } from '../00_quarks/colors';
import { flexboxDirection, FLEXBOX_DIRECTION } from '../00_quarks/flexbox'
import { bottom, display, LAYOUT_DISPLAY, LAYOUT_POSITION, left, position, right, top } from '../00_quarks/layout';
import { height, SIZES, width } from '../00_quarks/sizing';
import { margin, padding } from '../00_quarks/spacing';
import { listStyle, LIST_STYLE_TYPE } from '../00_quarks/typography';

type MobileDrawerProps = {
  absolute?: boolean,
  className?: string,
  closed: boolean,
  children: ReactNode[]
}

const slideIn = keyframes`
  0%{
    backdrop-filter: blur(0px);
    opacity: 0;
    translate: translateX(-100%);
  }
  1% {
    backdrop-filter: blur(0px);
    opacity: 0;
    translate: translateX(0%);
  }
  75% {
    backdrop-filter: blur(5px);
    opacity: .9;
    translate: translateX(0%);
  }
  100% {
    backdrop-filter: blur(5px);
    opacity: .9;
    translate: translateX(0%);
  }
`

const slideOut = keyframes`
  0% {
    backdrop-filter: blur(5px);
    opacity: .9;
    translate: translateX(0%);
  }
  25% {
    ackdrop-filter: blur(5px);
    opacity: .9;
    translate: translateX(0%);
  }
  99% {
    backdrop-filter: blur(0px);
    opacity: 0;
    translate: translateX(0%);
  }
  100% {
    backdrop-filter: blur(0px);
    opacity: 0;
    translate: translateX(-100%);
  }
`

const MobileNavigationDrawer: FunctionComponent<MobileDrawerProps> = ({className, children}) => {
  return (
    <nav className={className}>
      <ul>
        {children.map((child) => 
          <li>{child}</li>
        )}
      </ul>
    </nav>
  )
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
        z-index: 5;
      `)
    } else {
      return (`
        ${position(LAYOUT_POSITION.RELATIVE)}
        ${height(SIZES.SCREEN_HEIGHT)}
        ${width(SIZES.FULL)}
      `)
    }
  }}
  ${props => (
    props.closed ? css`animation-name: ${slideOut};` : css`animation-name: ${slideIn};`
  )}
  animation-duration: 750ms;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  ${display(LAYOUT_DISPLAY.FLEX)}
  ${flexboxDirection(FLEXBOX_DIRECTION.FLEX_COL)}
  ${backgroundColor(COLORS.GREY, 0, 0.9)}
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
`

StyledMobileDrawer.defaultProps = {
  absolute: true,
  closed: true
}

export default StyledMobileDrawer