import React from 'react';
import styled from 'styled-components'

import {
  BORDER_STYLES,
  borderColor,
  borderStyle,
  borderWidth
} from '../00_quarks/border'
import {
  backgroundColor,
  color,
  COLORS
} from '../00_quarks/colors'
import {
  display,
  LAYOUT_DISPLAY,
  LAYOUT_POSITION,
  position
} from '../00_quarks/layout'
import {
  height,
  SIZES,
  width
} from '../00_quarks/sizing'
import { padding } from '../00_quarks/spacing'
import {
  FontFamily,
  fontFamily,
  textTransform,
  TextTransform
} from '../00_quarks/typography'

/**
 * Primary UI component for user interaction
 */
export const Button = styled.button`
  ${backgroundColor(COLORS.TRANSPARENT)}
  ${borderColor(COLORS.GREY,0)}
  ${borderStyle(BORDER_STYLES.SOLID)}
  ${borderWidth(SIZES.S0_5)}
  ${color(COLORS.GREY, 0)}
  ${position(LAYOUT_POSITION.RELATIVE)}
  ${fontFamily(FontFamily.BODY)}
  ${height(SIZES.S14)}
  ${padding(SIZES.S0, SIZES.S6)}
  ${textTransform(TextTransform.UPPERCASE)}
  &:after {
    ${display(LAYOUT_DISPLAY.BLOCK)}
    ${position(LAYOUT_POSITION.ABSOLUTE)}
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    ${backgroundColor(COLORS.GREY,0)}
  }
`


