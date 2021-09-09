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


export interface SelectProps extends InputHTMLAttributes<HTMLSelectElement>{
  colorName: COLORS
  fontSize: FONT_SIZE
  shade: number
}

export const Select = styled.select<SelectProps>`
  ${position(LAYOUT_POSITION.RELATIVE)}
  ${props => color(props.colorName, props.shade) }
  ${props => fontSize(props.fontSize)}
  ${backgroundColor(COLORS.TRANSPARENT)}
  ${height(SIZES.S10)}
  ${padding(SIZES.S0, SIZES.S10, SIZES.S0, SIZES.S2)}
  ${borderColor(COLORS.GREY,0)}
  ${borderWidth(SIZES.S1)}
  ${borderColor(COLORS.GREY, 0)}
  ${borderStyle(BORDER_STYLES.DOUBLE)}
  ${fontFamily(FONT_FAMILY.HEADER)}
  ${letterSpacing(LETTER_SPACING.WIDE)}
  ${position(LAYOUT_POSITION.RELATIVE)}
  background-image:
    linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc
  );
  background-position:
    calc(100% - 15px) calc(0.9rem),
    calc(100% - 10px) calc(0.9rem),
    calc(100% - 2rem) 0.3rem;
  background-size: 5px 5px, 5px 5px, 1px 1.5rem;
  background-repeat: no-repeat;
  transition: all 0.3s;
  -webkit-appearance: none;
  -moz-appearance: none;
  &:hover, &:focus{
    ${color(COLORS.GREY, 9)}
    ${backgroundColor(COLORS.GREY,0)}
  }
  &:focus {
    outline: none;
  }
`

Select.defaultProps = {
  colorName: COLORS.GREY,
  fontSize: FONT_SIZE.XL,
  shade: 0
}

export default Select