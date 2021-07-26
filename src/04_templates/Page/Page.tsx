import React, { useState } from 'react'
import { COLORS } from '../../00_quarks/colors';
import { Grid } from '../../01_atoms/Layouts/Grid';
import Link from '../../01_atoms/Link';
import { Image } from '../../01_atoms/Image';
import theLastWordSrc from '../../assets/the_last_word_render.jpeg';
import TextLogo from '../../01_atoms/TextLogo';
import DesktopNavigation from '../../02_molecules/DesktopNavigation';

export default () => {
  const [logoColor, setLogoColor] = useState({name: COLORS.GREY, shade: 0})
  const setGold = () => setLogoColor({name: COLORS.GOLD, shade:4 })
  const setWhite = () => setLogoColor({name: COLORS.GREY, shade: 0})
  return (
    <Grid>
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
      <Image src={theLastWordSrc} />
    </Grid>
  )
}
