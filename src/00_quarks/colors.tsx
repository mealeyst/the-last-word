import { createGlobalStyle } from 'styled-components'
import { getEnumKeys } from '../utils/enum'

export enum COLORS {
  GREY,
  GOLD,
  TRANSPARENT
}

type HSL  = {
 hue: number,
 saturation: string,
 lightness: string
}

interface Colors {
  [COLORS.TRANSPARENT]: string
  [COLORS.GREY]: Array<HSL>,
  [COLORS.GOLD]: Array<HSL>
}

export const colors: Colors = {
  [COLORS.TRANSPARENT]: 'transparent',
  [COLORS.GREY]: [
    {hue: 210, saturation: '17%', lightness: '98%'},  // 0 hsl(210, 17%, 98%)
    {hue: 210, saturation: '16%', lightness: '93%'},  // 1 hsl(210, 16%, 93%)
    {hue: 210, saturation: '14%', lightness: '89%'},  // 2 hsl(210, 14%, 89%)
    {hue: 210, saturation: '14%', lightness: '83%'},  // 3 hsl(210, 14%, 83%)
    {hue: 210, saturation: '11%', lightness: '71%'},  // 4 hsl(210, 11%, 71%)
    {hue: 210, saturation: '11%', lightness: '63%'},  // 5 hsl(210, 11%, 63%)
    {hue: 208, saturation: '7%', lightness: '46%'},   // 6 hsl(208, 7%, 46%)
    {hue: 210, saturation: '9%', lightness: '31%'},   // 7 hsl(210, 9%, 31%)
    {hue: 210, saturation: '10%', lightness: '23%'},  // 8 hsl(210, 10%, 23%)
    {hue: 210, saturation: '11%', lightness: '15%'},  // 9 hsl(210, 11%, 15%)
    {hue: 210, saturation: '11%', lightness: '5%'}    // 10 hsl(210, 11%, 5%)
  ],
  [COLORS.GOLD]: [
    {hue: 49, saturation: '80%', lightness: '90%'},   // 0 hsl(49, 80%, 90%)
    {hue: 49, saturation: '100%', lightness: '85%'},  // 1 hsl(49, 65%, 85%)
    {hue: 49, saturation: '53%', lightness: '79%'},   // 2 hsl(49, 53%, 80%)
    {hue: 49, saturation: '48%', lightness: '70%'},   // 3 hsl(49, 48%, 70%)
    {hue: 49, saturation: '43%', lightness: '59%'},   // 4 hsl(49, 43%, 60%)
    {hue: 49, saturation: '38%', lightness: '50%'},   // 5 hsl(49, 38%, 50%)
    {hue: 49, saturation: '30%', lightness: '45%'},   // 6 hsl(49, 30%, 45%)
    {hue: 49, saturation: '25%', lightness: '40%'},   // 7 hsl(49, 25%, 40%)
    {hue: 49, saturation: '20%', lightness: '35%'},   // 8 hsl(49, 20%, 35%)
    {hue: 49, saturation: '15%', lightness: '30%'}    // 9 hsl(49, 15%, 30%)

  ]
}

export const buildHsl = ({hue, saturation, lightness}: HSL): string => (
  `hsl(${hue}, ${saturation}, ${lightness})`
)

export const buildHsla = ({hue, saturation, lightness}: HSL, alpha: number) => (
  `hsla(${hue}, ${saturation}, ${lightness}, ${alpha})`
)

export const buildColorStyle = (type: string) => (name: COLORS, shade?: number, alpha?: number): string => {
  const color = colors[name]
  if (alpha && typeof color == 'object' && typeof shade == 'number' && shade < color.length) {
    return `${type}: ${buildHsla(color[shade], alpha)};`
  } else if (typeof color == 'object' && typeof shade == 'number' && shade < color.length) {
    return `${type}: ${buildHsl(color[shade])};`
  } else if (typeof color == 'object' && typeof shade == 'number' && shade >= color.length) {
    console.warn(`Looks like you are trying to access a shade in the color ${getEnumKeys(COLORS)[name]} that doesn't exist.`)
    return `${type}: ${buildHsl(color[color.length -1])};`
  }
  return `${type}: ${color};`
}

export const SiteBackground = createGlobalStyle`
  body {
    background-color: ${buildHsl(colors[COLORS.GREY][10])};
    * {
      color: ${buildHsl(colors[COLORS.GREY][0])};
    }
  }
`


export const color = buildColorStyle('color')