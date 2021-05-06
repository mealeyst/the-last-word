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
  ${props => color(props.colorName, props.shade)}
  ${props => fontFamily(props.font)}
  ${props => fontWeight(props.weight)}
  ${props => fontSize(props.size)}
`

H2.defaultProps = {
  colorName: COLORS.GREY,
  font: FONT_FAMILY.HEADER,
  shade: 0,
  weight: FONT_WEIGHT.BOLD,
  size: FONT_SIZE.XL3
}

export default H2