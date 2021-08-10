import { ReactNode } from 'react'

import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from '../../00_quarks/typography';
import { COLORS } from '../../00_quarks/colors'

export interface Typography {
  children?: ReactNode
  className?: string
  colorName?: COLORS
  font?: FONT_FAMILY
  shade?: number
  size?: FONT_SIZE
}

export interface Heading extends Typography {
  weight?: FONT_WEIGHT
}