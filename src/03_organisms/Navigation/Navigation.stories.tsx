import React, { useState, Fragment } from 'react';
import Navigation from './Navigation';
import { COLORS } from '../../00_quarks/colors';
import Link from '../../01_atoms/Link/Link';
import TextLogo from '../../01_atoms/TextLogo/TextLogo'

export default {
  title: 'Organisms/Navigation',
  component: Navigation
};

const DesktopLinks = () => {
  return (
    <Fragment>
      
    </Fragment>
  )
}

const Template = () => {
  const [logoColor, setLogoColor] = useState({name: COLORS.GREY, shade: 0})
  const setGold = () => setLogoColor({name: COLORS.GOLD, shade:4 })
  const setWhite = () => setLogoColor({name: COLORS.GREY, shade: 0})
  const desktopChildren = [
    <Link href="#food">Food</Link>,
    <Link href="#cocktails">Cocktails</Link>,
    <Link
      href="#"
      underline={false}
      onFocus={setGold}
      onBlur={setWhite}
      onMouseEnter={setGold}
      onMouseLeave={setWhite}
    >
      <TextLogo fill={logoColor.name} shade={logoColor.shade} />
    </Link>,
    <Link href="#gallery">Gallery</Link>,
    <Link href="#contact">Contact</Link>
  ]
  const mobileChildren = [
    <Link shade={10} href="#food">Food</Link>,
    <Link shade={10} href="#cocktails">Cocktails</Link>,
    <Link shade={10} href="#gallery">Gallery</Link>,
    <Link shade={10} href="#contact">Contact</Link>
  ]
  return(
    <Navigation
      desktopChildren={desktopChildren}
      mobileChildren={mobileChildren}
    />
  )
}

export const Primary = Template.bind({});