import { createGlobalStyle } from 'styled-components'
import { SIZES, getSize } from './sizing'


const spacing = (type: string) => (...args: SIZES[]) => {
  if(args.length === 0) {
    throw new Error('Function requires at least one argument')
  } else if (args.length > 4) {
    throw new Error('Function requires at most four arguments')
  } else {
    return `${type}: ${args.map(arg => getSize(arg)).join(' ')};`
  }
}
export const margin = spacing('margin')
export const padding = spacing('padding')

export const marginTop = (size: SIZES) => `margin-top: ${getSize(size)};`

export const BodySpacing = createGlobalStyle`
  body {
    ${padding(SIZES.S0)}
    ${margin(SIZES.S0)}
  }
`