import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components'
import {
  backgroundColor
} from '../../../00_quarks/background'
import {
  BORDER_STYLES,
  borderColor,
  borderStyle,
  borderWidth
} from '../../../00_quarks/border'
import {
  buildColorStyle,
  color,
  COLORS,
} from '../../../00_quarks/colors'
import {
  LAYOUT_POSITION,
  position,
} from '../../../00_quarks/layout'
import {
  height,
  SIZES
} from '../../../00_quarks/sizing'
import { padding } from '../../../00_quarks/spacing'
import {
  FONT_FAMILY,
  fontFamily,
  LETTER_SPACING,
  letterSpacing,
  textTransform,
  TEXT_TRANSFORM
} from '../../../00_quarks/typography'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColorDefault?: COLORS,
  backgroundColorHover?: COLORS,
  backgroundShadeDefault?: number,
  backgroundShadeHover?: number,
  borderColorDefault?: COLORS,
  borderColorHover?: COLORS,
  borderWidth?: SIZES,
  borderShadeDefault?: number,
  borderShadeHover?: number,
  borderWidthHover?: SIZES,
  fontColorDefault?: COLORS,
  fontColorHover?: COLORS,
  fontFamily?: FONT_FAMILY,
  fontShadeDefault?: number,
  fontShadeHover?: number,
}

/**
 * Primary UI component for user interaction
 */
export const Button = styled.button<ButtonProps>`
  ${({
    backgroundColorDefault: color = COLORS.GREY,
    backgroundShadeDefault: shade = 10
  }) => backgroundColor(color, shade)}
  ${borderColor(COLORS.GREY,0)}
  ${({borderWidth:  borderWidthProp = SIZES.S1}) => borderWidth(borderWidthProp)}
  ${({
    borderColorDefault: color = COLORS.GREY,
    borderShadeDefault: shade = 0
  }) => borderColor(color, shade)}
  ${borderStyle(BORDER_STYLES.DOUBLE)}
  ${({
    fontColorDefault: fontColor = COLORS.GREY,
    fontShadeDefault: shade = 0
  }) => color(fontColor, shade)}
  ${({fontFamily: fontFamilyProp = FONT_FAMILY.HEADER}) => fontFamily(fontFamilyProp)}
  ${height(SIZES.S10)}
  ${padding(SIZES.S0, SIZES.S6)}
  ${position(LAYOUT_POSITION.RELATIVE)}
  ${textTransform(TEXT_TRANSFORM.UPPERCASE)}
  transition: all 0.3s;
  ${letterSpacing(LETTER_SPACING.WIDE)}
  &:hover, &:focus{
    ${({
      backgroundColorHover: color = COLORS.GREY,
      backgroundShadeHover: shade = 0
    }) => backgroundColor(color, shade)}
    ${({
      fontColorHover: fontColor = COLORS.GREY,
      fontShadeHover: shade = 10
    }) => color(fontColor, shade)}
  }
  &:focus {
    outline: none;
  }
`

export default Button

