import React, { FunctionComponent, ReactNode} from 'react'
import styled from 'styled-components'
import { backgroundColor } from '../00_quarks/background';
import { alignItem, BOX_ALIGNMENT, justifyContent } from '../00_quarks/boxalignment';
import { COLORS } from '../00_quarks/colors';
import { flexboxDirection, FLEXBOX_DIRECTION } from '../00_quarks/flexbox'
import { display, LAYOUT_DISPLAY } from '../00_quarks/layout'
import { height, SIZES } from '../00_quarks/sizing';
import { margin, padding } from '../00_quarks/spacing';
import { listStyle, LIST_STYLE_TYPE } from '../00_quarks/typography';

type MobileDrawerProps = {
  className?: string,
  children: ReactNode[]
}

const MobileNavigationDrawer: FunctionComponent<MobileDrawerProps> = ({className, children}) => {
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

export default styled(MobileNavigationDrawer)`
  ${display(LAYOUT_DISPLAY.FLEX)}
  ${flexboxDirection(FLEXBOX_DIRECTION.FLEX_COL)}
  ${backgroundColor(COLORS.GREY, 0, 0.9)}
  ${height(SIZES.SCREEN_HEIGHT)}
  ul {
    ${listStyle(LIST_STYLE_TYPE.NONE)}
    ${padding(SIZES.S10, SIZES.S0)}
    ${margin(SIZES.S0)}
  }
  li {
    ${display(LAYOUT_DISPLAY.FLEX)}
    ${justifyContent(BOX_ALIGNMENT.CENTER)}
  }
  li > * {
    ${display(LAYOUT_DISPLAY.FLEX)}
    ${alignItem(BOX_ALIGNMENT.CENTER)}
    ${height(SIZES.S11)}
    ${padding(SIZES.S0, SIZES.S4)}
  }
`