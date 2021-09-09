import React from 'react';
import styled from 'styled-components'
import { color, COLORS } from '../../00_quarks/colors';
import {
  fontFamily,
  fontSize,
  fontStyle,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_STYLE
} from '../../00_quarks/typography';
import { Typography } from './typeography'

export const Italic = styled.span<Typography>`
  ${({colorName = COLORS.GREY, shade = 0}) => color(colorName, shade)}
  ${fontFamily(FONT_FAMILY.BODY)}
  ${({size = FONT_SIZE.BASE}) => fontSize(size)}
  ${fontStyle(FONT_STYLE.ITALIC)}
`

export default Italic