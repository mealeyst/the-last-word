import React, { HTMLAttributes} from 'react';
import styled, { css } from 'styled-components'
import { display, LAYOUT_DISPLAY } from '../../00_quarks/layout';
import { SIZES, getSize } from '../../00_quarks/sizing';

interface GridProps extends HTMLAttributes<HTMLElement> {
  element?: string
  gap?: SIZES
  templateAreas?: string
  templateColumns?: string
  templateRows?: string
}

export const Grid = styled(({element, children, className }) => {
  console.log('element')
  return React.createElement(
    element,
    { className },
    [...children]
  )
})<GridProps>`
  ${display(LAYOUT_DISPLAY.GRID)}
  ${props => css`gap: ${getSize(props.gap)};`}
  ${props => props.templateAreas && css`grid-template-areas: ${props.templateAreas};`}
  ${props => props.templateColumns && css`grid-template-columns: ${props.templateColumns};`}
  ${props => props.templateRows && css`grid-template-rows: ${props.templateRows};`}
`

Grid.defaultProps = {
  element: 'div',
  gap: SIZES.S3,
  templateColumns: '1fr',
  templateRows: 'auto 1fr auto',
  templateAreas: "'header''main''footer'"
};

export default Grid