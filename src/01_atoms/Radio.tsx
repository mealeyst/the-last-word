import React, { Fragment } from 'react'
import styled from 'styled-components'
import { BACKGROUND_OPACITY, backgroundOpacity } from '../00_quarks/background'
import { COLORS, buildColorStyle } from '../00_quarks/colors'
import { LAYOUT_DISPLAY, LAYOUT_POSITION, LAYOUT_ZINDEX, display, position, top, left, zIndex } from '../00_quarks/layout'
import { margin } from '../00_quarks/spacing'
import { SIZES, height, width } from '../00_quarks/sizing'

interface RadioProps {
  className?: string
  colorName?: COLORS
  name: string
  shade?: number
  size?: SIZES
  value: string
}

const Radio = ({className, ...props}: RadioProps) => {
  return (
    <Fragment>
      <div className={className}>
        <input type="radio" {...props} />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
          <circle className="ring outer" cx="12.5" cy="12.5" r="10"/>
          <circle className="ring" cx="12.5" cy="12.5" r="7.5"/>
          <circle className="fill" cx="12.5" cy="12.5" r="7"/>
        </svg>
      </div>
    </Fragment>
  )
}

export const StyledRadio = styled(Radio)<RadioProps>`
  ${display(LAYOUT_DISPLAY.INLINE_BLOCK)}
  ${position(LAYOUT_POSITION.RELATIVE)}
  ${props => height(props.size)}
  ${props => width(props.size)}
  input, svg {
    ${top(SIZES.S0)}
    ${left(SIZES.S0)}
    ${position(LAYOUT_POSITION.ABSOLUTE)}
    ${props => height(props.size)}
    ${props => width(props.size)}
  }
  input {
    ${margin(SIZES.S0)}
    ${backgroundOpacity(BACKGROUND_OPACITY.OPACITY_0)}
    ${zIndex(LAYOUT_ZINDEX.Z10)}
  }
  svg {
    ${zIndex(LAYOUT_ZINDEX.Z0)}
    .ring{
      ${buildColorStyle('fill')(COLORS.TRANSPARENT)}
      ${props => buildColorStyle('stroke')(props.colorName, props.shade)}
      stroke-miterlimit:10;
      stroke-width: 1px;
    }
    .fill{
      ${props => buildColorStyle('fill')(props.colorName, props.shade)}
      transform: scale(0);
      transform-origin: 50% 50%;
      transition: transform 0.25s ease-in-out;
    }
  }
  input:checked + svg .fill {
    transform: scale(1);
  }
  input:focus + svg .outer{
    stroke-width: 3px;
  }
`

StyledRadio.defaultProps = {
  colorName: COLORS.GREY,
  shade: 0,
  size: SIZES.S6
}

export default StyledRadio