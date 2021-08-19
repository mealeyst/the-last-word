import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { borderColor, borderStyle, borderWidth, BORDER_STYLES } from '../../00_quarks/border'
import { BOX_ALIGNMENT, justifyContent } from '../../00_quarks/boxalignment'
import { COLORS } from '../../00_quarks/colors'
import { flexboxFlex, flexboxWrap, FLEXBOX_FLEX, FLEXBOX_WRAP } from '../../00_quarks/flexbox'

import { display, LAYOUT_DISPLAY } from '../../00_quarks/layout'
import { mediaQuery, QUERY_SIZES } from '../../00_quarks/media-query'
import { SIZES } from '../../00_quarks/sizing'
import H3 from '../../01_atoms/Typography/H3'

import FoodCategory, { FoodCategoryProps } from './FoodCategory'

export type FoodMenuProps = {
  className?: string,
  categories: FoodCategoryProps[]
}

export const FoodMenu: FunctionComponent<FoodMenuProps> = ({
  className,
  categories
}) => {
  return (
    <div className={className}>
      <H3 className='menu-title'>Menu</H3>
      <div className='categories'>
        {categories.map((category) => {
          return (
            <FoodCategory {...category} />
          )
        })}
      </div>
    </div>
  )
}

export const StyledFoodMenu: FunctionComponent<FoodMenuProps>  = styled(FoodMenu)`
    .menu-title {
      ${display(LAYOUT_DISPLAY.FLEX)}
      ${justifyContent(BOX_ALIGNMENT.CENTER)}
      ${borderWidth(SIZES.S1)}
      ${borderColor(COLORS.GREY, 0)}
      ${borderStyle(BORDER_STYLES.DOUBLE, BORDER_STYLES.NONE )}
    }
  .categories{
      ${display(LAYOUT_DISPLAY.FLEX)}
      ${flexboxWrap(FLEXBOX_WRAP.WRAP)}
      ${flexboxFlex(FLEXBOX_FLEX.ONE)}
      ${mediaQuery(QUERY_SIZES.LARGE)(
        `${flexboxWrap(FLEXBOX_WRAP.NOWRAP)}`
      )}
`

export default StyledFoodMenu