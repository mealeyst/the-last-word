import React, { Fragment, FunctionComponent, InputHTMLAttributes } from 'react'
import styled from 'styled-components'
import { BACKGROUND_OPACITY, backgroundOpacity } from '../../../00_quarks/background'
import { COLORS, buildColorStyle } from '../../../00_quarks/colors'
import {
  LAYOUT_DISPLAY,
  LAYOUT_POSITION,
  LAYOUT_ZINDEX,
  display,
  position,
  top,
  left,
  zIndex
} from '../../../00_quarks/layout'
import { margin } from '../../../00_quarks/spacing'
import { SIZES, height, width } from '../../../00_quarks/sizing'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  colorName?: COLORS
  name: string
  shade?: number
  size?: SIZES
  value: string
}

const Checkbox:FunctionComponent = ({className, ...props}: CheckboxProps) => {
  return (
    <Fragment>
      <div className={className}>
        <input type="checkbox" {...props} />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
          <rect className="box outer" x="2.5" y="2.5" width="20" height="20"/>
          <rect className="box" x="5" y="5" width="15" height="15"/>
          <line className="x-line" x1="5" y1="5" x2="12.5" y2="12.5"/>
          <line className="x-line" x1="20" y1="5" x2="12.5" y2="12.5"/>
          <line className="x-line" x1="20" y1="20" x2="12.5" y2="12.5"/>
          <line className="x-line" x1="5" y1="20" x2="12.5" y2="12.5"/>
        </svg>
      </div>
    </Fragment>
  )
}

export const StyledCheckbox = styled(Checkbox)<CheckboxProps>`
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
    .box, .x-line{
      ${buildColorStyle('fill')(COLORS.TRANSPARENT)}
      ${props => buildColorStyle('stroke')(props.colorName, props.shade)}
      stroke-miterlimit:10;
      stroke-width: 1px;
    }
    .x-line {
      stroke-dasharray: 11;
      stroke-dashoffset: -11;
      transition: stroke-dashoffset 0.25s ease-in-out;
    }
  }
  input:checked + svg .x-line {
    stroke-dashoffset: 0;
  }
  input:focus + svg .outer{
    stroke-width: 3px;
  }
`

StyledCheckbox.defaultProps = {
  colorName: COLORS.GREY,
  shade: 0,
  size: SIZES.S6
}

export default StyledCheckbox