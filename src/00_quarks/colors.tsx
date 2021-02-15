import { createGlobalStyle } from 'styled-components'

export enum COLORS {
  GREY,
  ORANGE,
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
  [COLORS.ORANGE]: Array<HSL>
}

export const colors: Colors = {
  [COLORS.TRANSPARENT]: 'transparent',
  [COLORS.GREY]: [
    {hue: 210, saturation: '17%', lightness: '98%'}, // 0 hsl(210, 17%, 98%)
    {hue: 210, saturation: '16%', lightness: '93%'}, // 1 hsl(210, 16%, 93%)
    {hue: 210, saturation: '14%', lightness: '89%'}, // 2 hsl(210, 14%, 89%)
    {hue: 210, saturation: '14%', lightness: '83%'}, // 3 hsl(210, 14%, 83%)
    {hue: 210, saturation: '11%', lightness: '71%'}, // 4 hsl(210, 11%, 71%)
    {hue: 208, saturation: '7%', lightness: '46%'}, // 5 hsl(208, 7%, 46%)
    {hue: 210, saturation: '9%', lightness: '31%'}, // 6 hsl(210, 9%, 31%)
    {hue: 210, saturation: '10%', lightness: '23%'}, // 7 hsl(210, 10%, 23%)
    {hue: 210, saturation: '11%', lightness: '15%'}, // 8 hsl(210, 11%, 15%)
    {hue: 210, saturation: '11%', lightness: '5%'} // 9 hsl(210, 11%, 5%)
  ],
  [COLORS.ORANGE]: [
    {hue: 43, saturation: '100%', lightness: '50%'}, // 0 hsl(43, 100%, 50%)
    {hue: 40, saturation: '100%', lightness: '50%'}, // 1 hsl(40, 100%, 50%)
    {hue: 37, saturation: '100%', lightness: '50%'}, // 2 hsl(37, 100%, 50%)
    {hue: 34, saturation: '100%', lightness: '50%'}, // 3 hsl(34, 100%, 50%)
    {hue: 31, saturation: '100%', lightness: '50%'}, // 4 hsl(31, 100%, 50%)
    {hue: 28, saturation: '100%', lightness: '50%'}, // 5 hsl(28, 100%, 50%)
    {hue: 26, saturation: '100%', lightness: '50%'}, // 6 hsl(26, 100%, 50%)
    {hue: 23, saturation: '100%', lightness: '50%'}, // 7 hsl(23, 100%, 50%)
    {hue: 20, saturation: '100%', lightness: '50%'}, // 8 hsl(20, 100%, 50%)
    {hue: 17, saturation: '100%', lightness: '50%'} // 9 hsl(17, 100%, 50%)

  ]
}

export const buildHsl = ({hue, saturation, lightness}): string => {
  return `hsl(${hue}, ${saturation}, ${lightness})`
}

export const buildColorStyle = (type: string) => (name: COLORS, shade?: number) => {
  const color = colors[name]
  if (typeof color == 'object' && typeof shade == 'number') {
    return `${type}: ${buildHsl(color[shade])};`
  }
  return `${type}: ${color};`
}

export const SiteBackground = createGlobalStyle`
  body {
    background-color: ${buildHsl(colors[COLORS.GREY][9])};
  }
`

export const backgroundColor = buildColorStyle('background-color')
export const color = buildColorStyle('color')