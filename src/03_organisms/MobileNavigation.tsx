import React, { useState, ReactNode, MouseEventHandler } from 'react'
import styled from 'styled-components'

import MobileNavigationDrawer from '../02_molecules/MobileNavigationDrawer';
import HamburgerButton from '../02_molecules/Hambuger/HamburgerButton'
import { LAYOUT_POSITION, left, position, top } from '../00_quarks/layout';
import { SIZES } from '../00_quarks/sizing';

type MobileNavigationType = {
  className?: string,
  children: ReactNode[],
  clickHandler: MouseEventHandler<HTMLButtonElement>
  open?: boolean
}

export const MobileNavigation = ({className, children, open: defaultOpen}: MobileNavigationType) => {
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