import React, { ImgHTMLAttributes } from 'react'
import styled from 'styled-components'
import { SIZES, width } from '../../00_quarks/sizing'

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  imgWidth?: SIZES
}

export const Image = styled.img<ImageProps>`
  ${props => props.imgWidth && width(props.imgWidth)}
`

Image.defaultProps = {
  imgWidth: SIZES.FULL
}

export default Image