import styled from 'styled-components'
import { color, COLORS } from '../../00_quarks/colors'
import {
  fontFamily,
  fontSize,
  fontWeight,
  FONT_FAMILY,
  FONT_SIZE,
  FONT_WEIGHT
} from '../../00_quarks/typography'

import { Heading } from './typeography'

export const H4 = styled.h4<Heading>`
  ${({colorName = COLORS.GREY, shade = 0}) => color(colorName, shade)}
  ${({font = FONT_FAMILY.HEADER}) => fontFamily(font)}
  ${({weight = FONT_WEIGHT.BOLD}) => fontWeight(weight)}
  ${({size = FONT_SIZE.BASE}) => fontSize(size)}
`

export default H4