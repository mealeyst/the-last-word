import React, { ReactNode, HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'
import { SIZES } from '../../00_quarks/sizing'

const shakeAnimation = keyframes`
  0% { transform: translate(10px); }
  20% { transform: translate(-8px); }
  40% { transform: translate(6px); }
  60% { transform: translate(4px); }
  80% { transform: translate(-2px); }
  100% { transform: translate(0px); }
`

interface ShakeProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode | ReactNode[],
  duration?: number
}

const Shake = ({className, children}: ShakeProps) => {
  console.log('shaking')
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export const StyledShake = styled(Shake)`
  animation-name: ${shakeAnimation};
  animation-duration: ${props => props.duration}s;
  animation-timing-function: ease-in-out;
`

StyledShake.defaultProps = {
  duration: 0.25
}

export default StyledShake