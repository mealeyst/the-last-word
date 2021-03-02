import React from 'react';
import styled from 'styled-components'
import { color, COLORS } from '../00_quarks/colors';
import { fontWeight, FONT_WEIGHT } from '../00_quarks/typography';
export const Bold = styled.span`
  ${color(COLORS.GREY, 1)}
  ${fontWeight(FONT_WEIGHT.BOLD)}
`