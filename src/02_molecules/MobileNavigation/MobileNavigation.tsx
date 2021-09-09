import React, { useState, ReactNode, MouseEventHandler, FunctionComponent } from 'react'
import styled from 'styled-components'

import MobileNavigationDrawer from './MobileNavigationDrawer';
import HamburgerButton from './HamburgerButton'
import { LAYOUT_POSITION, LAYOUT_ZINDEX, left, position, top, zIndex } from '../../00_quarks/layout';
import { SIZES } from '../../00_quarks/sizing';

export type MobileNavigationProps = {
  className?: string,
  children: ReactNode[],
}

export type MobileDrawerProps = {
  open?: boolean,
  onCloseClick?: MouseEventHandler<HTMLButtonElement>
  onOpenClick?: MouseEventHandler<HTMLButtonElement>
}

type MobileProps = MobileNavigationProps & MobileDrawerProps;

export const MobileNavigation: FunctionComponent<MobileProps> = ({className, children, open, onCloseClick, onOpenClick}) => {
  return (
    <header className={className}>
      <HamburgerButton onClick={onOpenClick} />
      <MobileNavigationDrawer open={open} onClose={onCloseClick}>
        {children}
      </MobileNavigationDrawer>
    </header>
  )
}

MobileNavigation.defaultProps = {
  open: false
}

const StyledMobileNavigation = styled(MobileNavigation)`
  ${position(LAYOUT_POSITION.FIXED)}
  ${top(SIZES.S0)}
  ${left(SIZES.S0)}
  ${zIndex(LAYOUT_ZINDEX.Z20)}
`

export default StyledMobileNavigation 