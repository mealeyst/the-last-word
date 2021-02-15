import { createGlobalStyle } from 'styled-components'

export enum FontFamily {
  HEADER,
  BODY
}

export enum FontSize {
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

export enum FontWeight {
  NORMAL,
  BOLD
}

export enum LetterSpacing {
  TIGHTER,
  TIGHT,
  NORMAL,
  WIDE,
  WIDER,
  WIDEST
}

export enum LineHeight {
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

export enum ListStyleType {
  NONE,
  DISC,
  DECIMAL
}

export enum TextAlign {
  LEFT,
  CENTER,
  RIGHT,
  JUSTIFY
}

export enum TextDecoration {
  UNDERLINE,
  LINE_THROUGH,
  NO_UNDERLINE
}

export enum TextTransform {
  UPPERCASE,
  LOWERCASE,
  CAPITALIZE,
  NORMAL_CASE
}

export enum VerticalAlign {
  BASELINE,
  TOP,
  MIDDLE,
  BOTTOM,
  TEXT_TOP,
  TEXT_BOTTOM
}

export enum Whitespace {
  NORMAL,
  NO_WRAP,
  PRE,
  PRE_LINE,
  PRE_WRAP
}

export enum WordBreak {
  NORMAL,
  WORDS,
  ALL,
  TRUNCATE
}

export const fontFamilyValues: {[key in FontFamily]: string} = {
  [FontFamily.HEADER]: '\'Old Standard TT\', serif',
  [FontFamily.BODY]: '\'PT Serif\', serif'
}

export const fontSizeValues: {[key in FontSize]: string} = {
  [FontSize.XS]: '0.75rem',
  [FontSize.SM]: '0.875rem',
  [FontSize.BASE]: '1rem',
  [FontSize.LG]: '1.125rem',
  [FontSize.XL]: '1.25rem',
  [FontSize.XL2]: '1.5rem',
  [FontSize.XL3]: '1.875rem',
  [FontSize.XL4]: '2.25rem',
  [FontSize.XL5]: '3rem',
  [FontSize.XL6]: '4rem'
}

export const fontWeightValues: {[key in FontWeight]: number} = {
  [FontWeight.NORMAL]: 400,
  [FontWeight.BOLD]: 700
}

export const letterSpacingValues: {[key in LetterSpacing]: string} = {
  [LetterSpacing.TIGHTER]: '-0.05rem',
  [LetterSpacing.TIGHT]: '-0.025rem',
  [LetterSpacing.NORMAL]: '0',
  [LetterSpacing.WIDE]: '0.025rem',
  [LetterSpacing.WIDER]: '0.05rem',
  [LetterSpacing.WIDEST]: '0.1rem'
}

export const lineHeightValues: {[key in LineHeight]: string} = {
  [LineHeight.LEADING3]: '.75rem',
  [LineHeight.LEADING4]: '1rem',
  [LineHeight.LEADING5]: '1.25rem',
  [LineHeight.LEADING6]: '1.5rem',
  [LineHeight.LEADING7]: '1.75rem',
  [LineHeight.LEADING8]: '2rem',
  [LineHeight.LEADING9]: '2.25rem',
  [LineHeight.LEADING10]: '2.5rem',
  [LineHeight.NONE]: '1',
  [LineHeight.TIGHT]: '1.25',
  [LineHeight.SNUG]: '1.375',
  [LineHeight.NORMAL]: '1.5',
  [LineHeight.RELAXED]: '1.625',
  [LineHeight.LOOSE]: '2'
}

export const listStyleTypeValues: {[key in ListStyleType]: string} = {
  [ListStyleType.NONE]: 'none',
  [ListStyleType.DISC]: 'disc',
  [ListStyleType.DECIMAL]: 'decimal'
}

export const textAlignValues: {[key in TextAlign]: string} = {
  [TextAlign.CENTER]: 'center',
  [TextAlign.JUSTIFY]: 'justify',
  [TextAlign.LEFT]: 'left',
  [TextAlign.RIGHT]: 'right'
}

export const textDecorationValues: {[key in TextDecoration]: string} = {
  [TextDecoration.LINE_THROUGH]: 'line-through',
  [TextDecoration.NO_UNDERLINE]: 'none',
  [TextDecoration.UNDERLINE]: 'underline'
}

export const textTransformValues: {[key in TextTransform]: string} = {
  [TextTransform.CAPITALIZE]: 'capitalize',
  [TextTransform.LOWERCASE]: 'lowercase',
  [TextTransform.NORMAL_CASE]: 'none',
  [TextTransform.UPPERCASE]: 'uppercase'
}

export const verticalAlignValues: {[key in VerticalAlign]: string} = {
  [VerticalAlign.BASELINE]: 'baseline',
  [VerticalAlign.BOTTOM]: 'bottom',
  [VerticalAlign.MIDDLE]: 'middle',
  [VerticalAlign.TEXT_BOTTOM]: 'text-bottom',
  [VerticalAlign.TEXT_TOP]: 'text-top',
  [VerticalAlign.TOP]: 'top'
}

export const whitespaceValues: {[key in Whitespace]: string} = {
  [Whitespace.NORMAL]: 'normal',
  [Whitespace.NO_WRAP]: 'no-wrap',
  [Whitespace.PRE]: 'pre',
  [Whitespace.PRE_LINE]: 'pre-line',
  [Whitespace.PRE_WRAP]: 'pre-wrap'
}

export const wordBreakValues: {[key in WordBreak]: string} = {
  [WordBreak.ALL]: 'word-break: break-all;',
  [WordBreak.NORMAL]: 'overflow-wrap: normal; word-break: normal;',
  [WordBreak.TRUNCATE]: 'overflow: hidden; text-overflow: ellipsis; white-space: nowrap;',
  [WordBreak.WORDS]: 'overflow-wrap: break-word;'

}

export const fontSize = (size: FontSize) => {
  return `font-size: ${fontSizeValues[size]};`
}

export const fontFamily = (family: FontFamily) => {
  return `font-family: ${fontFamilyValues[family]};`
}

export const fontWeight = (weight: FontWeight) => {
  return `font-weight: ${fontWeightValues[weight]};`
}

export const letterSpacing = (spacing: LetterSpacing) => {
  return `letter-spacing: ${letterSpacingValues[spacing]};`
}

export const lineHeight = (height: LineHeight) => {
  return `line-height: ${lineHeightValues[height]};`
}

export const listStyle = (type: ListStyleType) => {
  return `list-style-type: ${listStyleTypeValues[type]};`
}

export const textAlign = (align: TextAlign) => {
  return `text-align: ${textAlignValues[align]};`
}

export const textDecoration = (decoration: TextDecoration) => {
  return `text-decoration: ${textDecorationValues[decoration]};`
}

export const textTransform = (transform: TextTransform) => {
  return `text-transform: ${textTransformValues[transform]};`
}

export const verticalAlign = (align: VerticalAlign) => {
  return `vertical-align: ${verticalAlignValues[align]};`
}

export const whitespace = (spacing: Whitespace) => {
  return `white-space: ${whitespaceValues[spacing]};`
}

export const wordBreak = (type: WordBreak) => {
  return wordBreakValues[type]
}

export const ImportFonts = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap');

body {
  ${fontFamily(FontFamily.BODY)}
}
`