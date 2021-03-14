import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components'
import { backgroundColor } from '../00_quarks/background';
import { color, COLORS } from '../00_quarks/colors';
import { bottom, display, LAYOUT_DISPLAY, LAYOUT_POSITION, left, position, right } from '../00_quarks/layout';
import { height, SIZES, width } from '../00_quarks/sizing';
import { TEXT_DECORATION, textDecoration, TEXT_TRANSFORM, textTransform } from '../00_quarks/typography';

type LinkProps = {
  light?: boolean,
  children: ReactNode
  href: string
}

export const Link = styled('a')<LinkProps>`
  ${props => props.light && `
    ${color(COLORS.GREY, 1)}
  `}
  ${props => !props.light && `
    ${color(COLORS.GREY, 9)}
  `}
  ${textTransform(TEXT_TRANSFORM.UPPERCASE)}
  ${position(LAYOUT_POSITION.RELATIVE)}
  ${textDecoration(TEXT_DECORATION.NO_UNDERLINE)}
  &:before, &:after {
    ${position(LAYOUT_POSITION.ABSOLUTE)}
    ${display(LAYOUT_DISPLAY.BLOCK)}
    ${props => props.light && `
      ${backgroundColor(COLORS.GREY, 1)}
    `}
    ${props => !props.light && `
      ${backgroundColor(COLORS.GREY, 9)}
    `}
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
  &:focus, &:hover {
    &:before, &:after {
      transform: scaleX(1);
    }
  }
  &:focus {
    outline: none;
  }
`

Link.defaultProps = {
  light: true
}