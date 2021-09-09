import React, { ReactNode } from 'react'
import { forwardRef } from 'react'
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
import H2 from '../../01_atoms/Typography/H2'

export type SectionProps = {
  className?: string,
  children: ReactNode | ReactNode[],
  id: string,
  title: string,
}

export const Section = forwardRef<HTMLElement, SectionProps>(({className, children, id, title}, ref) => {
  return (
    <section className={className} id={id} ref={ref}>
      <H2>{title}</H2>
      <div className='content'>
        {children}
        </div>
    </section>
  )
})

const StyledSection = styled(Section)`
  ${padding(SIZES.S0, SIZES.S4, SIZES.S0)}
  ${mediaQuery(QUERY_SIZES.X_LARGE, QUERY_TARGETS.MIN_WIDTH)(`
    ${padding(SIZES.S24, SIZES.S0, SIZES.S0)}
  `)}
  ${H2} {
    ${display(LAYOUT_DISPLAY.FLEX)}
    ${justifyContent(BOX_ALIGNMENT.CENTER)}
    ${borderWidth(SIZES.S0_1)}
    ${borderColor(COLORS.GREY, 0)}
    ${borderStyle(BORDER_STYLES.SOLID )}
    ${flexboxWrap(FLEXBOX_WRAP.WRAP)}
    ${backgroundColor(COLORS.GREY, 10)}
    ${padding(SIZES.S4)}
  }
`

export default StyledSection