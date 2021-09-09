import React, { HTMLAttributes} from 'react';
import styled, { css } from 'styled-components'
import { display, LAYOUT_DISPLAY } from '../../00_quarks/layout';
import { SIZES, getSize } from '../../00_quarks/sizing';

export interface GridProps extends HTMLAttributes<HTMLElement> {
  element?: string
  gap?: SIZES
  templateAreas?: string
  templateColumns?: string
  templateRows?: string
}

export const Grid = styled(({element, children, className }) => {
  return React.createElement(
    element,
    { className },
    [...children]
  )
})<GridProps>`
  ${display(LAYOUT_DISPLAY.GRID)}
  ${({gap = SIZES.S3}) => css`gap: ${getSize(gap)};`}
  ${({ templateAreas = "'header''main''footer'"}) => templateAreas && css`grid-template-areas: ${templateAreas};`}
  ${({templateColumns = '1fr'}) => templateColumns && css`grid-template-columns: ${templateColumns};`}
  ${({ templateRows = 'auto 1fr auto'}) => templateRows && css`grid-template-rows: ${templateRows};`}
`

Grid.defaultProps = {
  element: 'div',
  gap: SIZES.S3,
  templateColumns: '1fr',
  templateRows: 'auto 1fr auto',
  templateAreas: "'header''main''footer'"
};

export default Grid