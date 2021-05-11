import React, { FunctionComponent, MouseEventHandler } from 'react';
import styled from 'styled-components'
// @ts-ignore
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// @ts-ignore
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { backgroundColor } from '../00_quarks/background';
import { color, COLORS } from '../00_quarks/colors';
import { height, SIZES, width } from '../00_quarks/sizing';
import { borderWidth } from '../00_quarks/border';
import { padding } from '../00_quarks/spacing';
import { fontSize, FONT_SIZE } from '../00_quarks/typography';
import { ScreenReaderText } from '../01_atoms/ScreenReaderText';
import { LAYOUT_POSITION, left, position, top } from '../00_quarks/layout';

import Fade from '../01_atoms/animations/Fade'

type HamburgerButtonProps = {
  absolute?: boolean,
  className?: string,
  closed?: boolean,
  onClick: MouseEventHandler<HTMLButtonElement>
}

const HamburgerButton: FunctionComponent<HamburgerButtonProps> = ({className, closed, onClick}) => {
  const srText = `${closed ? 'closed': 'Close'} menu`
  return (
    <button className={className} onClick={onClick}>
      <ScreenReaderText>{srText}</ScreenReaderText>
      <Fade show={closed}><FontAwesomeIcon className='menu' icon={faBars} aria-hidden="true" /></Fade>
      <Fade show={!closed}><FontAwesomeIcon className='close' icon={faTimes} aria-hidden="true" /></Fade>
    </button>
  );
}



const StyledHamburgerButton: FunctionComponent<HamburgerButtonProps> = styled(HamburgerButton)`
  ${props => {
    if(props.absolute){
      return (`
        ${position(LAYOUT_POSITION.ABSOLUTE)}
        ${top(SIZES.S4)}
        ${left(SIZES.S4)}
        z-index: 10;
      `)
    } else {
      return (`
        ${position(LAYOUT_POSITION.RELATIVE)}
      `)
    }
  }}
  ${backgroundColor(COLORS.TRANSPARENT)}
  ${width(SIZES.S10)}
  ${height(SIZES.S10)}
  ${padding(SIZES.S0)}
  ${borderWidth(SIZES.S0)}
  ${fontSize(FONT_SIZE.XL3)}

  .close, .menu {
    ${position(LAYOUT_POSITION.ABSOLUTE)}
    ${top(SIZES.HALF)}
    ${left(SIZES.HALF)}
    transform: translate(-50%, -50%);
  }

  .close path { ${color(COLORS.GREY, 9)}}
`

StyledHamburgerButton.defaultProps = {
  absolute: true,
  closed: false
}

export default StyledHamburgerButton