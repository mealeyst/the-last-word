import React from 'react';
import styled from 'styled-components'
import { backgroundColor } from '../00_quarks/background';
import { color, COLORS } from '../00_quarks/colors';
import { bottom, display, LAYOUT_DISPLAY, LAYOUT_POSITION, left, position, right } from '../00_quarks/layout';
import { height, SIZES, width } from '../00_quarks/sizing';
import { TextTransform, textTransform } from '../00_quarks/typography';

export const Link = styled.a`
  ${color(COLORS.GREY, 1)}
  ${textTransform(TextTransform.UPPERCASE)}
  ${position(LAYOUT_POSITION.RELATIVE)}
  &:before, &:after {
    ${position(LAYOUT_POSITION.ABSOLUTE)}
    ${display(LAYOUT_DISPLAY.BLOCK)}
    ${backgroundColor(COLORS.GREY, 1)}
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