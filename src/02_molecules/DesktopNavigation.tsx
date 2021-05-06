import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components'
import { backgroundColor } from '../00_quarks/background';
import { borderColor, borderStyle, borderWidth, BORDER_STYLES } from '../00_quarks/border';
import { alignItem, BOX_ALIGNMENT, justifyContent } from '../00_quarks/boxalignment';
import { COLORS } from '../00_quarks/colors';
import { display, LAYOUT_DISPLAY } from '../00_quarks/layout';
import { SIZES, width } from '../00_quarks/sizing';
import { margin, padding } from '../00_quarks/spacing';
import { listStyle, LIST_STYLE_TYPE } from '../00_quarks/typography';

type DesktopNavProps = {
  className?: string,
  children: ReactNode[]
}

const DesktopNavigation: FunctionComponent<DesktopNavProps> = ({className, children}) => {
  return (
    <nav className={className}>
      <ul>
        {children.map((child) =>
            <li>{child}</li>
        )}
      </ul>
    </nav>
  )
}

export default styled(DesktopNavigation)`
  ${display(LAYOUT_DISPLAY.FLEX)}
  ${backgroundColor(COLORS.GREY, 10)}
  ${borderWidth(SIZES.S1, SIZES.S0, SIZES.S1)}
  ${borderColor(COLORS.GREY, 0)}
  ${borderStyle(BORDER_STYLES.DOUBLE)}
  ${padding(SIZES.S2, SIZES.S0, SIZES.S2)}
  ul {
    ${display(LAYOUT_DISPLAY.FLEX)}
    ${listStyle(LIST_STYLE_TYPE.NONE)}
    ${justifyContent(BOX_ALIGNMENT.CENTER)}
    ${width(SIZES.FULL)}
    ${padding(SIZES.S0)}
    ${margin(SIZES.S0)}
  }
  li {
    ${padding(SIZES.S0, SIZES.S4)}
    ${margin(SIZES.S0)}
    ${display(LAYOUT_DISPLAY.FLEX)}
    ${alignItem(BOX_ALIGNMENT.CENTER)}
  }
`