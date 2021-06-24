import React, { HTMLAttributes} from 'react';
import styled, { css } from 'styled-components'
import { display, LAYOUT_DISPLAY } from '../../00_quarks/layout';
import { SIZES, getSize } from '../../00_quarks/sizing';

interface GridProps extends HTMLAttributes<HTMLElement> {
  gap: SIZES
  templateAreas: string
  templateColumns: string
  templateRows: string
}

export const Grid = styled.div<GridProps>`
  ${display(LAYOUT_DISPLAY.GRID)}
  ${props => css`gap: ${getSize(props.gap)};`}
  ${props => props.templateAreas && css`grid-template-areas: ${props.templateAreas};`}
  ${props => props.templateColumns && css`grid-template-columns: ${props.templateColumns};`}
  ${props => props.templateRows && css`grid-template-rows: ${props.templateRows};`}
`