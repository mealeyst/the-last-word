import { css } from 'styled-components'
import { sizeValues, SIZES } from './sizing'
export enum QUERY_SIZES {
  XX_SMALL,
  X_SMALL,
  SMALL,
  MEDIUM,
  LARGE,
  X_LARGE,
  XX_LARGE
}

type QuerySize = {
  [key in QUERY_SIZES]: string
}

export enum QUERY_TARGETS {
  MIN_WIDTH,
  MAX_WIDTH
}

type QueryTarget = {
  [key in QUERY_TARGETS]: string
}

interface Query {
  sizes: QuerySize
  targets: QueryTarget
}

export const queries:Query = {
  sizes: {
    [QUERY_SIZES.XX_SMALL]: sizeValues[SIZES.S80],
    [QUERY_SIZES.X_SMALL]: sizeValues[SIZES.S96],
    [QUERY_SIZES.SMALL]: sizeValues[SIZES.C_SM],
    [QUERY_SIZES.MEDIUM]: sizeValues[SIZES.C_MD],
    [QUERY_SIZES.LARGE]: sizeValues[SIZES.C_LG],
    [QUERY_SIZES.X_LARGE]: sizeValues[SIZES.C_XL],
    [QUERY_SIZES.XX_LARGE]:sizeValues[SIZES.C_2XL]
  },
  targets: {
    [QUERY_TARGETS.MAX_WIDTH]: 'max-width',
    [QUERY_TARGETS.MIN_WIDTH]: 'min-width'
  }
}

export const mediaQuery = (
  query: QUERY_SIZES,
  target = QUERY_TARGETS.MIN_WIDTH
) => (styles: string) => css`
  @media (${queries.targets[target]}: ${queries.sizes[query]}) {
    ${styles}
  }
`