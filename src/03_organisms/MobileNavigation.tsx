import React, { useState, ReactNode, MouseEventHandler } from 'react'
import styled from 'styled-components'

import MobileNavigationDrawer from '../02_molecules/MobileNavigationDrawer';
import HamburgerButton from '../02_molecules/HamburgerButton'

type MobileNavigationType = {
  className?: string,
  children: ReactNode[],
  clickHandler: MouseEventHandler<HTMLButtonElement>
}

export const MobileNavigation = ({className, children, closed: defaultClosed}: MobileNavigationType) => {
  const [closed, setClosed] = useState(defaultClosed)
  const clickHandler = () => { setClosed(!closed) }
  return (
    <header className={className}>
      <HamburgerButton closed={closed} onClick={clickHandler} />
      <MobileNavigationDrawer closed={closed}>
        {children}
      </MobileNavigationDrawer>
    </header>
  )
}

MobileNavigation.defaultProps = {
  closed: true
}