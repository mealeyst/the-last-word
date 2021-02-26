import React from 'react';
import styled from 'styled-components'

import { backgroundColor, backgroundOpacity, BACKGROUND_OPACITY } from '../00_quarks/background';
import {
  BORDER_STYLES,
  borderColor,
  borderStyle,
  borderWidth
} from '../00_quarks/border'
import {
  color,
  COLORS
} from '../00_quarks/colors'
import {
  display,
  LAYOUT_DISPLAY,
  LAYOUT_OVERFLOW,
  LAYOUT_POSITION,
  LAYOUT_ZINDEX,
  left,
  overflow,
  position,
  top,
  zIndex
} from '../00_quarks/layout'
import {
  height,
  SIZES,
  width
} from '../00_quarks/sizing'
import { padding } from '../00_quarks/spacing'
import {
  FONT_FAMILY,
  fontFamily,
  LETTER_SPACING,
  letterSpacing,
  textTransform,
  TEXT_TRANSFORM
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
  ${fontFamily(FONT_FAMILY.BODY)}
  ${height(SIZES.S10)}
  ${overflow(LAYOUT_OVERFLOW.HIDDEN)}
  ${padding(SIZES.S0, SIZES.S6)}
  ${position(LAYOUT_POSITION.RELATIVE)}
  ${textTransform(TEXT_TRANSFORM.UPPERCASE)}
  transition: all 0.3s;
  ${letterSpacing(LETTER_SPACING.WIDE)}
  &:after {
    ${backgroundColor(COLORS.GREY,0)}
    ${backgroundOpacity(BACKGROUND_OPACITY.OPACITY_0)}
    ${display(LAYOUT_DISPLAY.BLOCK)}
    ${height(SIZES.TWO_HUNDRED)}
    ${left(SIZES.HALF)}
    ${position(LAYOUT_POSITION.ABSOLUTE)}
    ${top(SIZES.HALF)}
    ${width(SIZES.FULL)}
    ${zIndex(LAYOUT_ZINDEX.ZNEG10)}
    content: '';
    transform: translateX(-50%) translateY(-50%) rotate(45deg) scaleX(0);
    transition: all 0.3s;
  }
  &:hover, &:focus{
    ${color(COLORS.GREY, 9)}
    :after {
      ${backgroundOpacity(BACKGROUND_OPACITY.OPACITY_100)}
      transform: translateX(-50%) translateY(-50%) rotate(45deg) scaleX(1);
    }
  }
  &:focus {
    outline: none;
  }
`


