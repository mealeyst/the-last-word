import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { BOX_ALIGNMENT, justifyContent } from '../00_quarks/boxalignment'
import { flexboxDirection, flexboxWrap, FLEXBOX_DIRECTION, FLEXBOX_WRAP } from '../00_quarks/flexbox'
import { display, LAYOUT_DISPLAY } from '../00_quarks/layout'
import { SIZES, width } from '../00_quarks/sizing'
import { margin } from '../00_quarks/spacing'

import { FONT_FAMILY } from '../00_quarks/typography'
import P from '../01_atoms/Typography/P'

export type FoodItemProps = {
  className: string,
  description: string,
  price: number,
  title: string
}

export const FoodItem: FunctionComponent<FoodItemProps> = ({
  className,
  description,
  price,
  title
}) => {
  return (
    <div className={className}>
      <P className='title' font={FONT_FAMILY.HEADER}>{title}</P>
      <P className='price' font={FONT_FAMILY.HEADER}>${price.toFixed(2)}</P>
      <P className='description'>{description}</P>
    </div>
  )
}

export const StyledFoodItem: FunctionComponent<FoodItemProps> = styled(FoodItem)`
  ${display(LAYOUT_DISPLAY.FLEX)}
  ${flexboxWrap(FLEXBOX_WRAP.WRAP)}
  .title, .price {
    ${width(SIZES.HALF)}
    ${margin(SIZES.S4, SIZES.S0, SIZES.S0)}

  }
  .price {
    ${display(LAYOUT_DISPLAY.FLEX)}
    ${justifyContent(BOX_ALIGNMENT.FLEX_END)}
  }
  .description {
    ${width(SIZES.FULL)}
  }
`

export default StyledFoodItem