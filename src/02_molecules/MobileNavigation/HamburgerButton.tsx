import React, { FunctionComponent, MouseEventHandler } from 'react';
import styled from 'styled-components'
// @ts-ignore
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { backgroundColor } from '../../00_quarks/background';
import { color, COLORS } from '../../00_quarks/colors';
import { height, SIZES, width } from '../../00_quarks/sizing';
import { borderColor, borderStyle, borderWidth, BORDER_STYLES } from '../../00_quarks/border';
import { padding } from '../../00_quarks/spacing';
import { fontSize, FONT_SIZE } from '../../00_quarks/typography';
import { ScreenReaderText } from '../../01_atoms/ScreenReaderText';
import { boxSizing, LAYOUT_BOX_SIZING, LAYOUT_POSITION, LAYOUT_ZINDEX, left, position, top, zIndex } from '../../00_quarks/layout';


export type HamburgerButtonProps = {
  absolute?: boolean,
  className?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>
}

const HamburgerButton: FunctionComponent<HamburgerButtonProps> = ({className, onClick}) => {
  return (
    <button className={className} onClick={onClick}>
      <ScreenReaderText>Open Menu</ScreenReaderText>
      <FontAwesomeIcon className='menu' icon={faBars} aria-hidden="true" />
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
        ${zIndex(LAYOUT_ZINDEX.Z20)}
      `)
    } else {
      return (`
        ${position(LAYOUT_POSITION.RELATIVE)}
      `)
    }
  }}
  ${backgroundColor(COLORS.TRANSPARENT)}
  ${width(SIZES.S6)}
  ${height(SIZES.S6)}
  ${padding(SIZES.S4)}
  ${borderWidth(SIZES.S1_5)}
  ${borderColor(COLORS.GREY, 9)}
  ${borderStyle(BORDER_STYLES.DOUBLE)}
  ${boxSizing(LAYOUT_BOX_SIZING.CONTENT_BOX)}
  ${fontSize(FONT_SIZE.XL3)}
  border-radius: 100%;
  ${backgroundColor(COLORS.GREY, 0)}
  box-shadow: 0px 5px 3px 2px rgba(0, 0, 0, .5);

  .menu {
    ${position(LAYOUT_POSITION.ABSOLUTE)}
    ${top(SIZES.HALF)}
    ${left(SIZES.HALF)}
    transform: translate(-50%, -50%);
    path {
      ${color(COLORS.GREY, 9)}
    }
  }
`

StyledHamburgerButton.defaultProps = {
  absolute: true
}

export default StyledHamburgerButton