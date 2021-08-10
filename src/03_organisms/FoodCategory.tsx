import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { backgroundColor } from '../00_quarks/background'

import { borderColor, borderStyle, borderWidth, BORDER_STYLES } from '../00_quarks/border'
import { COLORS } from '../00_quarks/colors'
import { LAYOUT_POSITION, left, position, top } from '../00_quarks/layout'
import { SIZES } from '../00_quarks/sizing'
import { margin, padding } from '../00_quarks/spacing'
import { FONT_FAMILY, FONT_SIZE } from '../00_quarks/typography'
import P from '../01_atoms/Typography/P'
import FoodItem, { FoodItemProps } from '../02_molecules/FoodItem'

export type FoodCategoryProps = {
  className: string,
  categoryName: string,
  foodItems: FoodItemProps[]
}

export const FoodCategory: FunctionComponent<FoodCategoryProps> = ({
  className,
  categoryName,
  foodItems
}) => {
  return (
    <div className={className}>
      <P className='category-name' font={FONT_FAMILY.HEADER} size={FONT_SIZE.XL}>{categoryName}</P>
      {foodItems.map((foodItem) => {
        return (
          <FoodItem {...foodItem} />
        )
      })}
    </div>
  )
}

export const StyledFoodCategory = styled(FoodCategory)`
  ${borderWidth(SIZES.S1)}
  ${borderColor(COLORS.GREY, 0)}
  ${borderStyle(BORDER_STYLES.DOUBLE)}
  ${padding(SIZES.S10, SIZES.S4, SIZES.S4)}
  ${position(LAYOUT_POSITION.RELATIVE)}
  ${margin(SIZES.S10, SIZES.S4, SIZES.S4)}
  .category-name {
    ${borderWidth(SIZES.S1)}
    ${borderColor(COLORS.GREY, 0)}
    ${borderStyle(BORDER_STYLES.DOUBLE)}
    ${padding(SIZES.S2, SIZES.S8)}
    ${position(LAYOUT_POSITION.ABSOLUTE)}
    ${top(SIZES.S0)}
    ${left(SIZES.S4)}
    ${margin(SIZES.S0)}
    ${backgroundColor(COLORS.GREY, 10)}
    transform: translateY(calc(-50%));
  }
`

export default StyledFoodCategory