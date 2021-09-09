import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

import {
  backgroundColor,
  backgroundOpacity,
  BACKGROUND_OPACITY
} from '../../../00_quarks/background';
import {
  BORDER_STYLES,
  borderColor,
  borderStyle,
  borderWidth
} from '../../../00_quarks/border'
import { color, COLORS } from '../../../00_quarks/colors'
import {
  LAYOUT_POSITION,
  position,
} from '../../../00_quarks/layout'
import {
  FONT_FAMILY,
  fontFamily,
  fontSize,
  FONT_SIZE,
  LETTER_SPACING,
  letterSpacing
} from '../../../00_quarks/typography'
import {
  height,
  SIZES,
} from '../../../00_quarks/sizing'
import { padding } from '../../../00_quarks/spacing';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  colorName: COLORS
  fontSize: FONT_SIZE
  shade: number
}

export const Input = styled.input.attrs(props => ({type: 'text'}))<InputProps>`
  ${props => color(props.colorName, props.shade) }
  ${props => fontSize(props.fontSize)}
  ${backgroundColor(COLORS.TRANSPARENT)}
  ${height(SIZES.S10)}
  ${padding(SIZES.S0, SIZES.S2)}
  ${borderColor(COLORS.GREY,0)}
  ${borderWidth(SIZES.S1)}
  ${borderColor(COLORS.GREY, 0)}
  ${borderStyle(BORDER_STYLES.DOUBLE)}
  ${fontFamily(FONT_FAMILY.HEADER)}
  ${letterSpacing(LETTER_SPACING.WIDE)}
  ${position(LAYOUT_POSITION.RELATIVE)}
  transition: all 0.3s;
  &:hover, &:focus{
    ${color(COLORS.GREY, 9)}
    ${backgroundColor(COLORS.GREY,0)}
    :after {
      ${backgroundOpacity(BACKGROUND_OPACITY.OPACITY_100)}
      transform: scaleX(1);
    }
  }
  &:focus {
    outline: none;
  }
`

Input.defaultProps = {
  colorName: COLORS.GREY,
  fontSize: FONT_SIZE.XL,
  shade: 0
}

export default Input