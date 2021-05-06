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
  ${props => color(props.colorName, props.shade)}
  ${props => fontFamily(props.font)}
  ${props => fontWeight(props.weight)}
  ${props => fontSize(props.size)}
`

H4.defaultProps = {
  colorName: COLORS.GREY,
  font: FONT_FAMILY.HEADER,
  shade: 0,
  size: FONT_SIZE.BASE,
  weight: FONT_WEIGHT.BOLD
}

export default H4