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
  ${props => color(props.colorName, props.shade)}
  ${fontFamily(FONT_FAMILY.BODY)}
  ${props => fontSize(props.size)}
  ${props => fontStyle(FONT_STYLE.ITALIC)}
`

Italic.defaultProps = {
  colorName: COLORS.GREY,
  shade: 0,
  size: FONT_SIZE.BASE
}

export default Italic