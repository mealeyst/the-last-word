import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { backgroundColor } from '../00_quarks/background';
import { borderColor, borderStyle, borderWidth, BORDER_STYLES } from '../00_quarks/border';
import { COLORS } from '../00_quarks/colors';
import { display, LAYOUT_DISPLAY } from '../00_quarks/layout';
import { SIZES, width } from '../00_quarks/sizing';
import { margin, padding } from '../00_quarks/spacing';

export const DesktopNavigation = styled(({className, children, ...props}) => {
  return (
    <nav className={className}>
      <ul>
        {children.map((child) =>
            <li>{child}</li>
        )}
      </ul>
    </nav>
  )
})`
  ${display(LAYOUT_DISPLAY.FLEX)}
  ${backgroundColor(COLORS.GREY, 10)}
  ${borderWidth(SIZES.S1, SIZES.S0, SIZES.S1)}
  ${borderColor(COLORS.GREY, 0)}
  ${borderStyle(BORDER_STYLES.DOUBLE)}
  ${padding(SIZES.S3, SIZES.S0, SIZES.S3)}
  ul {
    ${display(LAYOUT_DISPLAY.FLEX)}
    list-style: none;
    justify-content: center;
    ${width(SIZES.FULL)}
    ${padding(SIZES.S0)}
    ${margin(SIZES.S0)}
  }
  li {
    ${padding(SIZES.S0, SIZES.S4)}
    ${margin(SIZES.S0)}
  }
`

DesktopNavigation.propTypes = {
  children: PropTypes.array
}