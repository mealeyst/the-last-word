import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { borderColor, borderStyle, borderWidth, BORDER_STYLES } from '../../00_quarks/border'
import { BOX_ALIGNMENT, justifyContent } from '../../00_quarks/boxalignment'
import { COLORS } from '../../00_quarks/colors'
import { flexboxWrap, FLEXBOX_WRAP } from '../../00_quarks/flexbox'

import { display, LAYOUT_DISPLAY } from '../../00_quarks/layout'
import { SIZES } from '../../00_quarks/sizing'
import H3 from '../../01_atoms/Typography/H3'

import FoodCategory, { FoodCategoryProps } from './FoodCategory'

export type FoodMenuProps = {
    className?: string,
    categories: FoodCategoryProps[],
    id?: string,
    title?: string
}

export const FoodMenu: FunctionComponent<FoodMenuProps> = ({
  className,
  categories,
  title
}) => {
  return (
    <div className={className}>
      <H3 className='menu-title'>{title}</H3>
        {categories.map((category) => {
          return (
            <FoodCategory {...category} />
          )
        })}
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
      ${flexboxWrap(FLEXBOX_WRAP.WRAP)}
    }
  .categories{
      ${display(LAYOUT_DISPLAY.GRID)}
`

StyledFoodMenu.defaultProps = {
  title: 'Menu'
}

export default StyledFoodMenu