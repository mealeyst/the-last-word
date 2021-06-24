import { css } from 'styled-components'
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

const queries:Query = {
  sizes: {
    [QUERY_SIZES.XX_SMALL]: '320px',
    [QUERY_SIZES.X_SMALL]: '480px',
    [QUERY_SIZES.SMALL]: '600px',
    [QUERY_SIZES.MEDIUM]: '768px',
    [QUERY_SIZES.LARGE]: '900px',
    [QUERY_SIZES.X_LARGE]: '1024px',
    [QUERY_SIZES.XX_LARGE]:'1200px'
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