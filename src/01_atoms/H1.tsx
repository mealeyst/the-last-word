import styled from 'styled-components'
import { color, COLORS } from '../00_quarks/colors'
import { fontFamily, fontWeight, FONT_FAMILY, FONT_WEIGHT, textTransform, TEXT_TRANSFORM } from '../00_quarks/typography'

type H1Props = {
  color: COLORS,
  shade: number,
  weight: FONT_WEIGHT
}

const H1 = styled.h1<H1Props>`
  ${props => {
    return color(props.color, props.shade)
  }}
  ${fontFamily(FONT_FAMILY.HEADER)}
  ${props => fontWeight(props.weight)}
  ${textTransform(TEXT_TRANSFORM.UPPERCASE)}
`

H1.defaultProps = {
  color: COLORS.GREY,
  shade: 0,
  weight: FONT_WEIGHT.NORMAL
}

export default H1