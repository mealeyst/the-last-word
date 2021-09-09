import styled from 'styled-components'
import { color, COLORS } from '../../00_quarks/colors';
import {
  FONT_FAMILY,
  FONT_SIZE,
  fontFamily,
  fontSize
} from '../../00_quarks/typography';

import { Typography } from './typeography'


export const P = styled.p<Typography>`
  ${({shade = 0, colorName = COLORS.GREY})=> color(colorName, shade)}
  ${({font = FONT_FAMILY.BODY}) => fontFamily(font)}
  ${({size = FONT_SIZE.BASE}) => fontSize(size)}
`

export default P