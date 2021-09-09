import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { backgroundColor } from '../../00_quarks/background'
import { borderColor, borderStyle, borderWidth, BORDER_STYLES } from '../../00_quarks/border'
import { COLORS } from '../../00_quarks/colors'
import { flexboxDirection, FLEXBOX_DIRECTION } from '../../00_quarks/flexbox'
import { display, LAYOUT_DISPLAY, LAYOUT_POSITION, LAYOUT_ZINDEX, left, position, top, zIndex } from '../../00_quarks/layout'
import { SIZES } from '../../00_quarks/sizing'
import { margin, marginTop, padding } from '../../00_quarks/spacing'
import { FONT_FAMILY, FONT_SIZE } from '../../00_quarks/typography'
import Container from '../../01_atoms/Container/Container'
import P from '../../01_atoms/Typography/P'
import FoodItem, { FoodItemProps } from '../../02_molecules/FoodItem/FoodItem'

export type FoodCategoryProps = {
  className?: string,
  categoryName: string,
  categoryDetails?: string,
  foodItems: FoodItemProps[],
  warning?: string
}

export const FoodCategory: FunctionComponent<FoodCategoryProps> = ({
  className,
  categoryName,
  categoryDetails,
  foodItems,
  warning
}) => {
  return (
    <Container className={className}>
      <P className='category-name' font={FONT_FAMILY.HEADER} size={FONT_SIZE.XL}>{categoryName}</P>
      {categoryDetails && <P>{categoryDetails}</P>}
      {foodItems.map((foodItem) => {
        return (
          <FoodItem {...foodItem} />
        )
      })}
      {warning && <P className='category__warning' size={FONT_SIZE.SM} shade={3}>{warning}</P>}
    </Container>
  )
}

export const StyledFoodCategory = styled(FoodCategory)`
  ${display(LAYOUT_DISPLAY.FLEX)}
  ${flexboxDirection(FLEXBOX_DIRECTION.FLEX_COL)}
  ${position(LAYOUT_POSITION.RELATIVE)}
  .category-name {
    ${borderWidth(SIZES.S0_1)}
    ${borderColor(COLORS.GREY, 0)}
    ${borderStyle(BORDER_STYLES.SOLID)}
    ${padding(SIZES.S2, SIZES.S8)}
    ${position(LAYOUT_POSITION.ABSOLUTE)}
    ${top(SIZES.S0)}
    ${left(SIZES.S4)}
    ${margin(SIZES.S0)}
    ${backgroundColor(COLORS.GREY, 10)}
    ${zIndex(LAYOUT_ZINDEX.Z10)}
    transform: translateY(calc(-50%));
  }
  .category__warning {
    ${marginTop(SIZES.AUTO)}
  }
`

export default StyledFoodCategory