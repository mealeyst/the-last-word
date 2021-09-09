import { buildColorStyle } from './colors'
import { SIZES, getSize, computeRem } from './sizing'

const radiusSizes = {
  NONE: 0,
  SM: 2,
  DEFAULT: 4,
  MD: 6,
  LG: 8,
  XL: 12,
  '2XL': 16,
  '3XL': 24,
  FULL: 9999
}

const radiusLocations = {
  DEFAULT: (size: string): string => `border-radius: ${size};`,
  TL: (size: string): string => `border-top-left-radius: ${size};`,
  TR: (size: string): string => `border-top-right-radius: ${size};`,
  BL: (size: string): string => `border-bottom-left-radius: ${size};`,
  BR: (size: string): string => `border-bottom-right-radius: ${size};`,
  B: (size: string): string => `${radiusLocations.BL(size)}\n${radiusLocations.BR(size)}`,
  L: (size: string): string => `${radiusLocations.BL(size)}\n${radiusLocations.TL(size)}}`,
  R: (size: string): string => `${radiusLocations.BR(size)}\n${radiusLocations.TR(size)}}`,
  T: (size: string): string => `${radiusLocations.TL(size)}\n${radiusLocations.TR(size)}}`,
}

type BorderRadiusKey = keyof BORDER_RADIUS


export enum BORDER_RADIUS {
  ROUNDED_NONE,
  ROUNDED_SM,
  ROUNDED,
  ROUNDED_MD,
  ROUNDED_LG,
  ROUNDED_XL,
  ROUNDED_2XL,
  ROUNDED_3XL,
  ROUNDED_FULL,
  ROUNDED_T_NONE,
  ROUNDED_R_NONE,
  ROUNDED_B_NONE,
  ROUNDED_L_NONE,
  ROUNDED_T_SM,
  ROUNDED_R_SM,
  ROUNDED_B_SM,
  ROUNDED_L_SM,
  ROUNDED_T,
  ROUNDED_R,
  ROUNDED_B,
  ROUNDED_L,
  ROUNDED_T_MD,
  ROUNDED_R_MD,
  ROUNDED_B_MD,
  ROUNDED_L_MD,
  ROUNDED_T_LG,
  ROUNDED_R_LG,
  ROUNDED_B_LG,
  ROUNDED_L_LG,
  ROUNDED_T_XL,
  ROUNDED_R_XL,
  ROUNDED_B_XL,
  ROUNDED_L_XL,
  ROUNDED_T_2XL,
  ROUNDED_R_2XL,
  ROUNDED_B_2XL,
  ROUNDED_L_2XL,
  ROUNDED_T_3XL,
  ROUNDED_R_3XL,
  ROUNDED_B_3XL,
  ROUNDED_L_3XL,
  ROUNDED_T_FULL,
  ROUNDED_R_FULL,
  ROUNDED_B_FULL,
  ROUNDED_L_FULL,
  ROUNDED_TL_NONE,
  ROUNDED_TR_NONE,
  ROUNDED_BR_NONE,
  ROUNDED_BL_NONE,
  ROUNDED_TL_SM,
  ROUNDED_TR_SM,
  ROUNDED_BR_SM,
  ROUNDED_BL_SM,
  ROUNDED_TL,
  ROUNDED_TR,
  ROUNDED_BR,
  ROUNDED_BL,
  ROUNDED_TL_MD,
  ROUNDED_TR_MD,
  ROUNDED_BR_MD,
  ROUNDED_BL_MD,
  ROUNDED_TL_LG,
  ROUNDED_TR_LG,
  ROUNDED_BR_LG,
  ROUNDED_BL_LG,
  ROUNDED_TL_XL,
  ROUNDED_TR_XL,
  ROUNDED_BR_XL,
  ROUNDED_BL_XL,
  ROUNDED_TL_2XL,
  ROUNDED_TR_2XL,
  ROUNDED_BR_2XL,
  ROUNDED_BL_2XL,
  ROUNDED_TL_3XL,
  ROUNDED_TR_3XL,
  ROUNDED_BR_3XL,
  ROUNDED_BL_3XL,
  ROUNDED_TL_FULL,
  ROUNDED_TR_FULL,
  ROUNDED_BR_FULL,
  ROUNDED_BL_FULL
}

export enum BORDER_STYLES {
  DASHED,
  DOTTED,
  DOUBLE,
  GROOVE,
  HIDDEN,
  INSET,
  NONE,
  OUTSET,
  RIDGE,
  SOLID
}

type BORDER_STYLE = {
  [style in BORDER_STYLES]: string
}


const borderStyles: BORDER_STYLE = {
  [BORDER_STYLES.DASHED]: 'dashed',
  [BORDER_STYLES.DOTTED]: 'dotted',
  [BORDER_STYLES.DOUBLE]: 'double',
  [BORDER_STYLES.GROOVE]: 'groove',
  [BORDER_STYLES.HIDDEN]: 'hidden',
  [BORDER_STYLES.INSET]: 'inset',
  [BORDER_STYLES.NONE]: 'none',
  [BORDER_STYLES.OUTSET]: 'outset',
  [BORDER_STYLES.RIDGE]: 'ridge',
  [BORDER_STYLES.SOLID]: 'solid'
}

export const borderColor = buildColorStyle('border-color')


const getStyle = (style: BORDER_STYLES): string => borderStyles[style]

export const borderStyle = (...args: BORDER_STYLES[]) => {
  return `border-style: ${args.map(arg => getStyle(arg)).join(' ')};`
}

export const borderWidth = (...args: SIZES[]) => {
  return `border-width: ${args.map(arg => getSize(arg)).join(' ')};`
}