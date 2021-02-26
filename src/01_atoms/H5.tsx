import react from 'react'
import styled from 'styled-components'
import { color, COLORS } from '../00_quarks/colors'
import { fontFamily, fontWeight, FONT_FAMILY, FONT_WEIGHT, textTransform, TEXT_TRANSFORM } from '../00_quarks/typography'

type Props = {
  className: string
  children: any,
  color:  COLORS,
  shade: number
}

export const H5 = styled(({className, children}) => {
  return (<h5 className={className}>{children}</h5>)
})`
  ${props => {
    return color(props.color, props.shade)
  }}
  ${fontFamily(FONT_FAMILY.HEADER)}
  ${props => fontWeight(props.weight)}
  ${textTransform(TEXT_TRANSFORM.UPPERCASE)}
`

H5.defaultProps = {
  color: COLORS.GREY,
  shade: 0,
  weight: FONT_WEIGHT.NORMAL
}