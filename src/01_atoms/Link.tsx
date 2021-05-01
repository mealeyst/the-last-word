import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components'
import { backgroundColor } from '../00_quarks/background';
import { color, COLORS, buildColorStyle } from '../00_quarks/colors';
import { bottom, display, LAYOUT_DISPLAY, LAYOUT_POSITION, left, position, right } from '../00_quarks/layout';
import { height, SIZES, width } from '../00_quarks/sizing';
import { padding } from '../00_quarks/spacing';
import { TEXT_DECORATION, textDecoration, TEXT_TRANSFORM, textTransform } from '../00_quarks/typography';

type LinkProps = {
  color?: COLORS
  shade?: number
  children: ReactNode
  href: string
  underline?: boolean
}

const animateUnderline = css`
&:focus, &:hover {
  &:before, &:after {
    transform: scaleX(1);
  }
}
`

export const Link = styled('a')<LinkProps>`
  ${props => color(props.color, props.shade)}
  ${textTransform(TEXT_TRANSFORM.UPPERCASE)}
  ${position(LAYOUT_POSITION.RELATIVE)}
  ${textDecoration(TEXT_DECORATION.NO_UNDERLINE)}
  ${padding(SIZES.S1)}
  &:before, &:after {
    ${position(LAYOUT_POSITION.ABSOLUTE)}
    ${display(LAYOUT_DISPLAY.BLOCK)}
    ${props => backgroundColor(props.color, props.shade)}
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
  color: COLORS.GREY,
  shade: 0,
  underline: true
}