import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components'
import { backgroundColor } from '../../00_quarks/background';
import { borderColor, borderStyle, borderWidth, BORDER_STYLES } from '../../00_quarks/border';
import { alignItem, BOX_ALIGNMENT, justifyContent } from '../../00_quarks/boxalignment';
import { COLORS } from '../../00_quarks/colors';
import { display, LAYOUT_DISPLAY, LAYOUT_POSITION, LAYOUT_ZINDEX, position, zIndex} from '../../00_quarks/layout';
import { SIZES, width } from '../../00_quarks/sizing';
import { margin, padding } from '../../00_quarks/spacing';
import { listStyle, LIST_STYLE_TYPE } from '../../00_quarks/typography';
import Grid from '../../01_atoms/Layouts/Grid'

type DesktopNavProps = {
  className?: string,
  children: ReactNode[],
  position?: LAYOUT_POSITION
}

const DesktopNavigation: FunctionComponent<DesktopNavProps> = ({className, children}) => {
  return (
    <nav className={className}>
      <Grid
        element='ul'
        templateColumns='1fr 1fr 1fr 1fr 1fr'
        templateRows='1fr'
        templateAreas="'main'">
        {children.map((child) =>
            <li>{child}</li>
        )}
      </Grid>
    </nav>
  )
}

const StyledDesktopNavigation: FunctionComponent<DesktopNavProps> = styled(DesktopNavigation)`
  ${display(LAYOUT_DISPLAY.FLEX)}
  ${backgroundColor(COLORS.GREY, 10)}
  ${borderWidth(SIZES.S1, SIZES.S0, SIZES.S1)}
  ${borderColor(COLORS.GREY, 0)}
  ${borderStyle(BORDER_STYLES.DOUBLE)}
  ${padding(SIZES.S2, SIZES.S0, SIZES.S2)}
  ${props => position(props.position)}
  ${zIndex(LAYOUT_ZINDEX.Z10)}
  top: 0;
  box-shadow: 0px 5px 3px 2px rgba(0, 0, 0, .5);
  ul {
    ${display(LAYOUT_DISPLAY.GRID)}
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
    ${justifyContent(BOX_ALIGNMENT.CENTER)}
    ${display(LAYOUT_DISPLAY.FLEX)}
  }
`

StyledDesktopNavigation.defaultProps = {
  position: LAYOUT_POSITION.STICKY
}

export default StyledDesktopNavigation;
