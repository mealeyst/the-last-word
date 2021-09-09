import styled from 'styled-components'
import { color, COLORS } from '../../00_quarks/colors';
import {
  FONT_FAMILY,
  FONT_SIZE,
  fontFamily,
  fontSize,
  fontWeight,
  FONT_WEIGHT
} from '../../00_quarks/typography';

import { Typography } from './typeography'


export const Bold = styled.span<Typography>`
  ${({colorName = COLORS.GREY, shade = 0}) => color(colorName, shade)}
  ${({font = FONT_FAMILY.BODY}) => fontFamily(font)}
  ${({size = FONT_SIZE.BASE}) => fontSize(size)}
  ${fontWeight(FONT_WEIGHT.BOLD)}
`

export default Bold