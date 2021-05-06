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


const Bold = styled.span<Typography>`
  ${props => color(props.colorName, props.shade)}
  ${props => fontFamily(props.font)}
  ${props => fontSize(props.size)}
  ${fontWeight(FONT_WEIGHT.BOLD)}
`

Bold.defaultProps = {
  colorName: COLORS.GREY,
  font: FONT_FAMILY.BODY,
  shade: 0,
  size: FONT_SIZE.BASE
}

export default Bold