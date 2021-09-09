import React, { FunctionComponent, ReactNode } from 'react'
import styled from 'styled-components'

import { backgroundColor } from '../../00_quarks/background'
import { borderColor, borderStyle, borderWidth, BORDER_STYLES } from '../../00_quarks/border'
import { COLORS } from '../../00_quarks/colors'
import { SIZES } from '../../00_quarks/sizing'
import { margin, padding } from '../../00_quarks/spacing'

export type ContainerProps = {
  className?: string,
  children: ReactNode | ReactNode[]
}

export const Container: FunctionComponent<ContainerProps> = ({ className, children}) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

const StyledContainer = styled(Container)`
${borderWidth(SIZES.S0_1)}
${borderColor(COLORS.GREY, 0)}
${borderStyle(BORDER_STYLES.SOLID)}
${padding(SIZES.S10, SIZES.S4, SIZES.S4)}
${margin(SIZES.S10, SIZES.S0, SIZES.S4)}
${backgroundColor(COLORS.GREY, 10)}
`

export default StyledContainer