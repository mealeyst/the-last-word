import React, { useState, ReactNode, MouseEventHandler, FunctionComponent } from 'react'
import styled from 'styled-components'

import MobileNavigationDrawer from './MobileNavigationDrawer';
import HamburgerButton from './HamburgerButton'
import { LAYOUT_POSITION, left, position, top } from '../../00_quarks/layout';
import { SIZES } from '../../00_quarks/sizing';

export type MobileNavigationProps = {
  className?: string,
  children: ReactNode[],
  clickHandler?: MouseEventHandler<HTMLButtonElement>
  open?: boolean
}

export const MobileNavigation: FunctionComponent<MobileNavigationProps> = ({className, children, open: defaultOpen}) => {
  const [open, setOpen] = useState(defaultOpen)
  const clickHandler = () => { setOpen(!open) }
  return (
    <header className={className}>
      <HamburgerButton open={open} onClick={clickHandler} />
      <MobileNavigationDrawer open={open}>
        {children}
      </MobileNavigationDrawer>
    </header>
  )
}

MobileNavigation.defaultProps = {
  open: true
}

const StyledMobileNavigation = styled(MobileNavigation)`
  ${position(LAYOUT_POSITION.FIXED)}
  ${top(SIZES.S0)}
  ${left(SIZES.S0)}
`

export default StyledMobileNavigation 