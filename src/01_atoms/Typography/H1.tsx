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

export const H1 = styled.h1<Heading>`
  ${({colorName = COLORS.GREY, shade = 0}) => color(colorName, shade)}
  ${fontFamily(FONT_FAMILY.HEADER)}
  ${({weight = FONT_WEIGHT.BOLD}) => fontWeight(weight)}
  ${({size = FONT_SIZE.XL4}) => fontSize(size)}
`

export default H1