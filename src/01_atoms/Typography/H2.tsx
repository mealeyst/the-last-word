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

export const H2 = styled.h2<Heading>`
  ${({colorName = COLORS.GREY, shade = 0}) => color(colorName, shade)}
  ${({font = FONT_FAMILY.HEADER}) => fontFamily(font)}
  ${({weight = FONT_WEIGHT.BOLD}) => fontWeight(weight)}
  ${({size = FONT_SIZE.XL3}) => fontSize(size)}
`

export default H2