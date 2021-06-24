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
  ${props => color(props.colorName, props.shade)}
  ${fontFamily(FONT_FAMILY.HEADER)}
  ${props => fontWeight(props.weight)}
  ${props => fontSize(props.size)}
`

H1.defaultProps = {
  colorName: COLORS.GREY,
  shade: 0,
  weight: FONT_WEIGHT.BOLD,
  size: FONT_SIZE.XL4
}

export default H1