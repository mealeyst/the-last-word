import React, { FunctionComponent, forwardRef, RefCallback } from 'react'
import styled from 'styled-components'
import { backgroundColor } from '../../00_quarks/background'
import { borderColor, borderStyle, borderWidth, BORDER_STYLES } from '../../00_quarks/border'
import { BOX_ALIGNMENT, justifyContent } from '../../00_quarks/boxalignment'
import { COLORS } from '../../00_quarks/colors'
import { flexboxWrap, FLEXBOX_WRAP } from '../../00_quarks/flexbox'

import { display, LAYOUT_DISPLAY } from '../../00_quarks/layout'
import { mediaQuery, QUERY_SIZES, QUERY_TARGETS } from '../../00_quarks/media-query'
import { SIZES } from '../../00_quarks/sizing'
import { margin, padding } from '../../00_quarks/spacing'
import H3 from '../../01_atoms/Typography/H3'
import Section from '../../02_molecules/Section/Section'

import FoodCategory, { FoodCategoryProps } from './FoodCategory'

export type FoodMenuProps = {
    className?: string,
    categories: FoodCategoryProps[],
    id?: string,
    title?: string
}

export const FoodMenu = forwardRef<HTMLElement, FoodMenuProps>(({
  categories,
  id,
  title
}, ref) => {
  return (
    <Section title={title} id={id} ref={ref}>
      {categories.map((category) => {
          return (
            <FoodCategory {...category} />
          )
        })}
    </Section>
  )
})

export const StyledFoodMenu = styled(FoodMenu)`
${margin(SIZES.S0, SIZES.S4, SIZES.S0)}
${mediaQuery(QUERY_SIZES.X_LARGE, QUERY_TARGETS.MIN_WIDTH)(`
  ${margin(SIZES.S24, SIZES.S0, SIZES.S0)}
`)}
    .menu-title {
      ${display(LAYOUT_DISPLAY.FLEX)}
      ${justifyContent(BOX_ALIGNMENT.CENTER)}
      ${borderWidth(SIZES.S0_1)}
      ${borderColor(COLORS.GREY, 0)}
      ${borderStyle(BORDER_STYLES.SOLID )}
      ${flexboxWrap(FLEXBOX_WRAP.WRAP)}
      ${backgroundColor(COLORS.GREY, 10)}
      ${padding(SIZES.S4)}
    }
  .categories{
      ${display(LAYOUT_DISPLAY.GRID)}
`

StyledFoodMenu.defaultProps = {
  title: 'Menu'
}

export default StyledFoodMenu