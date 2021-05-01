import React from 'react';
import styled from 'styled-components'
import { color, COLORS } from '../00_quarks/colors';
import { fontStyle, FONT_STYLE } from '../00_quarks/typography';


export const Italic = styled.span`
  ${color(COLORS.GREY, 1)}
  ${fontStyle(FONT_STYLE.ITALIC)}
`