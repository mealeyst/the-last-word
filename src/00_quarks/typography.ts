import { createGlobalStyle } from 'styled-components'

export enum FONT_FAMILY {
  HEADER,
  BODY
}

export enum FONT_SIZE {
  XS,
  SM,
  BASE,
  LG,
  XL,
  XL2,
  XL3,
  XL4,
  XL5,
  XL6
}

export enum FONT_WEIGHT {
  NORMAL,
  BOLD
}

export  enum FONT_STYLE {
  NORMAL,
  ITALIC
}

export enum LETTER_SPACING {
  TIGHTER,
  TIGHT,
  NORMAL,
  WIDE,
  WIDER,
  WIDEST
}

export enum LINE_HEIGHT {
  LEADING3,
  LEADING4,
  LEADING5,
  LEADING6,
  LEADING7,
  LEADING8,
  LEADING9,
  LEADING10,
  NONE,
  TIGHT,
  SNUG,
  NORMAL,
  RELAXED,
  LOOSE
}

export enum LIST_STYLE_TYPE {
  NONE,
  DISC,
  DECIMAL
}

export enum TEXT_ALIGN {
  LEFT,
  CENTER,
  RIGHT,
  JUSTIFY
}

export enum TEXT_DECORATION {
  UNDERLINE,
  LINE_THROUGH,
  NO_UNDERLINE
}

export enum TEXT_TRANSFORM {
  UPPERCASE,
  LOWERCASE,
  CAPITALIZE,
  NORMAL_CASE
}

export enum VERTICAL_ALIGN {
  BASELINE,
  TOP,
  MIDDLE,
  BOTTOM,
  TEXT_TOP,
  TEXT_BOTTOM
}

export enum WHITESPACE {
  NORMAL,
  NO_WRAP,
  PRE,
  PRE_LINE,
  PRE_WRAP
}

export enum WORD_BREAK {
  NORMAL,
  WORDS,
  ALL,
  TRUNCATE
}

export const fontFamilyValues: {[key in FONT_FAMILY]: string} = {
  [FONT_FAMILY.HEADER]: '\'Bodoni Moda\', serif',
  [FONT_FAMILY.BODY]: '\'Montserrat\', sans-serif'
}

export const fontSizeValues: {[key in FONT_SIZE]: string} = {
  [FONT_SIZE.XS]: '0.75rem',
  [FONT_SIZE.SM]: '0.875rem',
  [FONT_SIZE.BASE]: '1rem',
  [FONT_SIZE.LG]: '1.125rem',
  [FONT_SIZE.XL]: '1.25rem',
  [FONT_SIZE.XL2]: '1.5rem',
  [FONT_SIZE.XL3]: '1.875rem',
  [FONT_SIZE.XL4]: '2.25rem',
  [FONT_SIZE.XL5]: '3rem',
  [FONT_SIZE.XL6]: '4rem'
}

const fontStyleValues: {[key in FONT_STYLE]: string} = {
  [FONT_STYLE.ITALIC]: 'italic',
  [FONT_STYLE.NORMAL]: 'normal'
}

export const fontWeightValues: {[key in FONT_WEIGHT]: number} = {
  [FONT_WEIGHT.NORMAL]: 400,
  [FONT_WEIGHT.BOLD]: 700
}

export const letterSpacingValues: {[key in LETTER_SPACING]: string} = {
  [LETTER_SPACING.TIGHTER]: '-0.05rem',
  [LETTER_SPACING.TIGHT]: '-0.025rem',
  [LETTER_SPACING.NORMAL]: '0',
  [LETTER_SPACING.WIDE]: '0.025rem',
  [LETTER_SPACING.WIDER]: '0.05rem',
  [LETTER_SPACING.WIDEST]: '0.1rem'
}

export const lineHeightValues: {[key in LINE_HEIGHT]: string} = {
  [LINE_HEIGHT.LEADING3]: '.75rem',
  [LINE_HEIGHT.LEADING4]: '1rem',
  [LINE_HEIGHT.LEADING5]: '1.25rem',
  [LINE_HEIGHT.LEADING6]: '1.5rem',
  [LINE_HEIGHT.LEADING7]: '1.75rem',
  [LINE_HEIGHT.LEADING8]: '2rem',
  [LINE_HEIGHT.LEADING9]: '2.25rem',
  [LINE_HEIGHT.LEADING10]: '2.5rem',
  [LINE_HEIGHT.NONE]: '1',
  [LINE_HEIGHT.TIGHT]: '1.25',
  [LINE_HEIGHT.SNUG]: '1.375',
  [LINE_HEIGHT.NORMAL]: '1.5',
  [LINE_HEIGHT.RELAXED]: '1.625',
  [LINE_HEIGHT.LOOSE]: '2'
}

export const listStyleTypeValues: {[key in LIST_STYLE_TYPE]: string} = {
  [LIST_STYLE_TYPE.NONE]: 'none',
  [LIST_STYLE_TYPE.DISC]: 'disc',
  [LIST_STYLE_TYPE.DECIMAL]: 'decimal'
}

export const textAlignValues: {[key in TEXT_ALIGN]: string} = {
  [TEXT_ALIGN.CENTER]: 'center',
  [TEXT_ALIGN.JUSTIFY]: 'justify',
  [TEXT_ALIGN.LEFT]: 'left',
  [TEXT_ALIGN.RIGHT]: 'right'
}

export const textDecorationValues: {[key in TEXT_DECORATION]: string} = {
  [TEXT_DECORATION.LINE_THROUGH]: 'line-through',
  [TEXT_DECORATION.NO_UNDERLINE]: 'none',
  [TEXT_DECORATION.UNDERLINE]: 'underline'
}

export const textTransformValues: {[key in TEXT_TRANSFORM]: string} = {
  [TEXT_TRANSFORM.CAPITALIZE]: 'capitalize',
  [TEXT_TRANSFORM.LOWERCASE]: 'lowercase',
  [TEXT_TRANSFORM.NORMAL_CASE]: 'none',
  [TEXT_TRANSFORM.UPPERCASE]: 'uppercase'
}

export const verticalAlignValues: {[key in VERTICAL_ALIGN]: string} = {
  [VERTICAL_ALIGN.BASELINE]: 'baseline',
  [VERTICAL_ALIGN.BOTTOM]: 'bottom',
  [VERTICAL_ALIGN.MIDDLE]: 'middle',
  [VERTICAL_ALIGN.TEXT_BOTTOM]: 'text-bottom',
  [VERTICAL_ALIGN.TEXT_TOP]: 'text-top',
  [VERTICAL_ALIGN.TOP]: 'top'
}

export const whitespaceValues: {[key in WHITESPACE]: string} = {
  [WHITESPACE.NORMAL]: 'normal',
  [WHITESPACE.NO_WRAP]: 'no-wrap',
  [WHITESPACE.PRE]: 'pre',
  [WHITESPACE.PRE_LINE]: 'pre-line',
  [WHITESPACE.PRE_WRAP]: 'pre-wrap'
}

export const wordBreakValues: {[key in WORD_BREAK]: string} = {
  [WORD_BREAK.ALL]: 'word-break: break-all;',
  [WORD_BREAK.NORMAL]: 'overflow-wrap: normal; word-break: normal;',
  [WORD_BREAK.TRUNCATE]: 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;',
  [WORD_BREAK.WORDS]: 'overflow-wrap: break-word;'

}

export const fontSize = (size: FONT_SIZE): string => {
  return `font-size: ${fontSizeValues[size]};`
}

export const fontFamily = (family: FONT_FAMILY): string => {
  return `font-family: ${fontFamilyValues[family]};`
}

export const fontStyle = (style: FONT_STYLE): string => {
  return `font-style: ${fontStyleValues[style]};`
}

export const fontWeight = (weight: FONT_WEIGHT): string => {
  return `font-weight: ${fontWeightValues[weight]};`
}

export const letterSpacing = (spacing: LETTER_SPACING): string => {
  return `letter-spacing: ${letterSpacingValues[spacing]};`
}

export const lineHeight = (height: LINE_HEIGHT): string => {
  return `line-height: ${lineHeightValues[height]};`
}

export const listStyle = (type: LIST_STYLE_TYPE): string => {
  return `list-style-type: ${listStyleTypeValues[type]};`
}

export const textAlign = (align: TEXT_ALIGN): string => {
  return `text-align: ${textAlignValues[align]};`
}

export const textDecoration = (decoration: TEXT_DECORATION): string => {
  return `text-decoration: ${textDecorationValues[decoration]};`
}

export const textTransform = (transform: TEXT_TRANSFORM): string => {
  return `text-transform: ${textTransformValues[transform]};`
}

export const verticalAlign = (align: VERTICAL_ALIGN): string => {
  return `vertical-align: ${verticalAlignValues[align]};`
}

export const whitespace = (spacing: WHITESPACE): string => {
  return `white-space: ${whitespaceValues[spacing]};`
}

export const wordBreak = (type: WORD_BREAK): string => {
  return wordBreakValues[type]
}

export const ImportFonts = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&display=swap');
body {
  ${fontFamily(FONT_FAMILY.BODY)}
}
`