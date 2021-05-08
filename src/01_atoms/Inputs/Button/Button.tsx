import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components'
import {
  backgroundColor
} from '../../../00_quarks/background'
import {
  BORDER_STYLES,
  borderColor,
  borderStyle,
  borderWidth
} from '../../../00_quarks/border'
import {
  buildColorStyle,
  color,
  COLORS,
} from '../../../00_quarks/colors'
import {
  LAYOUT_POSITION,
  position,
} from '../../../00_quarks/layout'
import {
  height,
  SIZES
} from '../../../00_quarks/sizing'
import { padding } from '../../../00_quarks/spacing'
import {
  FONT_FAMILY,
  fontFamily,
  LETTER_SPACING,
  letterSpacing,
  textTransform,
  TEXT_TRANSFORM
} from '../../../00_quarks/typography'

type HSLColorProps = {
  name: {
    default: COLORS,
    hover: COLORS
  },
  shade: {
    default: number,
    hover: number
  }
}

type HSLAColorProps = {
  color: {
    name: {
      default: COLORS,
      hover: COLORS
    },
    shade: {
      default: number,
      hover: number
    },
    alpha: {
      default: number,
      hover: number
    }
  }
}

type BorderProps = {
  color: HSLColorProps,
  width: {
    default: SIZES,
    hover: SIZES
  }
}

type FontProps = {
  color: HSLColorProps,
  family: FONT_FAMILY
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  background: HSLAColorProps
  border: BorderProps,
  font: FontProps
}

/**
 * Primary UI component for user interaction
 */
export const Button = styled.button<ButtonProps>`
  ${props => backgroundColor(
    props.background.color.name.default,
    props.background.color.shade.default
  )}
  ${borderColor(COLORS.GREY,0)}
  ${borderWidth(SIZES.S1)}
  ${props => borderColor(
    props.border.color.name.default,
    props.border.color.shade.default
  )}
  ${borderStyle(BORDER_STYLES.DOUBLE)}
  ${props => color(
    props.font.color.name.default,
    props.font.color.shade.default
  )}
  ${props => fontFamily(props.font.family)}
  ${height(SIZES.S10)}
  ${padding(SIZES.S0, SIZES.S6)}
  ${position(LAYOUT_POSITION.RELATIVE)}
  ${textTransform(TEXT_TRANSFORM.UPPERCASE)}
  transition: all 0.3s;
  ${letterSpacing(LETTER_SPACING.WIDE)}
  &:hover, &:focus{
    ${props => backgroundColor(
      props.background.color.name.hover,
      props.background.color.shade.hover
    )}
    ${props => color(
      props.font.color.name.hover,
      props.font.color.shade.hover
    )}
  }
  &:focus {
    outline: none;
  }
`

Button.defaultProps = {
  background: {
    color: {
      name: {
        default: COLORS.GREY,
        hover: COLORS.GREY
      },
      shade: {
        default: 10,
        hover: 0
      },
      alpha: {
        default: 0,
        hover: 1
      }
    }
  },
  border: {
    color: {
      name: {
        default: COLORS.GREY,
        hover: COLORS.GREY
      },
      shade: {
        default: 0,
        hover: 0
      }
    },
    width: {
      default: SIZES.S1,
      hover: SIZES.S1
    }
  },
  font: {
    color: {
      name: {
        default: COLORS.GREY,
        hover: COLORS.GREY
      },
      shade: {
        default: 0,
        hover: 10
      }
    },
    family: FONT_FAMILY.HEADER
  }
}
export default Button

