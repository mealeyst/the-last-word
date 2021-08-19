import React, { useState } from 'react';
import { COLORS } from '../../00_quarks/colors';
import Link from '../../01_atoms/Link/Link'
import TextLogo from '../../01_atoms/TextLogo/TextLogo'
import DesktopNavigation from './DesktopNavigation';

export default {
  title: 'Molecules/DesktopNavigation',
  component: DesktopNavigation
};

const Template = () => {
  const [logoColor, setLogoColor] = useState({name: COLORS.GREY, shade: 0})
  const setGold = () => setLogoColor({name: COLORS.GOLD, shade:4 })
  const setWhite = () => setLogoColor({name: COLORS.GREY, shade: 0})
  return(
    <DesktopNavigation>
      <Link href="#">Menus</Link>
      <Link href="#">Gallery</Link>
      <Link
        href="#"
        underline={false}
        onFocus={setGold}
        onBlur={setWhite}
        onMouseEnter={setGold}
        onMouseLeave={setWhite}
        >
        <TextLogo fill={logoColor.name} shade={logoColor.shade} />
      </Link>
      <Link href="#">Press</Link>
      <Link href="#">Contact</Link>
    </DesktopNavigation>
  )
}

export const Primary = Template.bind({});

