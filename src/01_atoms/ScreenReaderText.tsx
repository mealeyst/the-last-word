import React from 'react'
import styled from 'styled-components'

type Props = {
  className: string
  children: any
}

export const ScreenReaderText = styled(({className, children}) => {
  return (<span className={className}>{children}</span>)
})`
position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
border-width: 0;
`