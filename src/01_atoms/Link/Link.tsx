import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components'
import { backgroundColor } from '../../00_quarks/background';
import { color, COLORS } from '../../00_quarks/colors';
import { bottom, display, LAYOUT_DISPLAY, LAYOUT_POSITION, left, position, right } from '../../00_quarks/layout';
import { height, SIZES, width } from '../../00_quarks/sizing';
import { padding } from '../../00_quarks/spacing';
import { TEXT_DECORATION, textDecoration, TEXT_TRANSFORM, textTransform, FONT_STYLE, fontWeight, FONT_WEIGHT, fontSize, FONT_SIZE, fontFamily, FONT_FAMILY } from '../../00_quarks/typography';

export interface LinkProps {
  children: ReactNode
  colorName?: COLORS
  font?: FONT_FAMILY
  href: string
  shade?: number
  size?: FONT_SIZE
  transform?: TEXT_TRANSFORM
  underline?: boolean
  weight?: FONT_WEIGHT
}

const animateUnderline = css`
&:focus, &:hover {
  &:before, &:after {
    transform: scaleX(1);
  }
}
`
const Link = styled('a')<LinkProps>`
  ${props => color(props.colorName, props.shade)}
  ${props => textTransform(props.transform)}
  ${props => fontWeight(props.weight)}
  ${props => fontSize(props.size)}
  ${props => fontFamily(props.font)}
  ${position(LAYOUT_POSITION.RELATIVE)}
  ${textDecoration(TEXT_DECORATION.NO_UNDERLINE)}
  ${padding(SIZES.S1)}
  &:before, &:after {
    ${position(LAYOUT_POSITION.ABSOLUTE)}
    ${display(LAYOUT_DISPLAY.BLOCK)}
    ${props => backgroundColor(props.colorName, props.shade)}
    content: '';
    ${height(SIZES.S0_1)}
    ${width(SIZES.HALF)}
    ${bottom(SIZES.S0)}
    transform: scaleX(0);
    transition: transform 0.2s ease-in;
  }
  &:before {
    ${right(SIZES.HALF)}
    transform-origin: right center;
  }
  &:after {
    ${left(SIZES.HALF)}
    transform-origin: left center;
  }

  &:focus {
    outline: none;
  }
  ${props => props.underline && animateUnderline}
`

Link.defaultProps = {
  colorName: COLORS.GREY,
  font: FONT_FAMILY.HEADER,
  shade: 0,
  size: FONT_SIZE.BASE,
  transform: TEXT_TRANSFORM.UPPERCASE,
  underline: true,
  weight: FONT_WEIGHT.NORMAL
}

export default Link