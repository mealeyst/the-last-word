import React, { FunctionComponent, MouseEventHandler } from 'react';
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { backgroundColor } from '../00_quarks/background';
import { COLORS } from '../00_quarks/colors';
import { height, SIZES, width } from '../00_quarks/sizing';
import { borderWidth } from '../00_quarks/border';
import { padding } from '../00_quarks/spacing';
import { fontSize, FONT_SIZE } from '../00_quarks/typography';

type HamburgerButtonProps = {
  className?: string,
  open?: boolean,
  onClick: MouseEventHandler<HTMLButtonElement>
}

const HamburgerButton: FunctionComponent<HamburgerButtonProps> = ({className, open, onClick}) => {
  return (
    <button className={className} onClick={onClick}>
      {!open && <FontAwesomeIcon icon={faBars} /> }
      {open && <FontAwesomeIcon icon={faTimes} />}
    </button>
  );
}

HamburgerButton.defaultProps = {
  open: false
}

export default styled(HamburgerButton)`
  ${backgroundColor(COLORS.TRANSPARENT)}
  ${width(SIZES.S10)}
  ${height(SIZES.S10)}
  ${padding(SIZES.S0)}
  ${borderWidth(SIZES.S0)}
  ${fontSize(FONT_SIZE.XL3)}
`