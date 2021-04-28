import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components'
import { SIZES } from '../00_quarks/sizing';

type GridColumn = {
    count: number
    size: SIZES | string
}

type GridRowProps = {
  className?: string,
  children: ReactNode | ReactNode[],
  columnGap?: SIZES,
  column: GridColumn
}

const GridRow: FunctionComponent<GridRowProps> = ({className, children}) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

const StyledGridRow: FunctionComponent<GridRowProps> = styled(GridRow)`
  display: grid;
  grid-template-columns: repeat(${props => `${props.column.count}${props.column.size}`});
  grid-column-gap: ${props => props.columnGap};
`

GridRow.defaultProps = {
  columnGap: SIZES.S4,
  column: {
    count: 12,
    size: 'fr'
  }
}

export default StyledGridRow