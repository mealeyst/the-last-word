import React, { useState, FunctionComponent, MouseEventHandler, useRef } from 'react'
import styled from 'styled-components'

import { COLORS } from '../../00_quarks/colors';
import { Grid } from '../../01_atoms/Layouts/Grid';
import Link from '../../01_atoms/Link/Link';
import { Image } from '../../01_atoms/Image/Image';
import theLastWordSrc from '../../assets/the_last_word_render.jpeg';
import TextLogo from '../../01_atoms/TextLogo/TextLogo';
import DesktopNavigation from '../../02_molecules/DesktopNavigation/DesktopNavigation'
import FoodMenu, {FoodMenuProps } from '../../03_organisms/FoodMenu/FoodMenu';
import { maxWidth, SIZES } from '../../00_quarks/sizing';
import { margin } from '../../00_quarks/spacing';

export type PageProps = {
  className: string,
  menus: FoodMenuProps[]
}

interface RefDictionary {
  [key: string]: HTMLElement;
}

const Page: FunctionComponent<PageProps>  = ({ className, menus }) => {
  const [logoColor, setLogoColor] = useState({name: COLORS.GREY, shade: 0})
  const setGold = () => setLogoColor({name: COLORS.GOLD, shade:4 })
  const setWhite = () => setLogoColor({name: COLORS.GREY, shade: 0})
  const sections = useRef<RefDictionary>({});
  const setRef = (id: string) => (element: HTMLElement) => {
    sections.current[id] = element
  };
  console.log(sections)
  const onClick: MouseEventHandler = (e) => {
    e.preventDefault()
    const target = e.target as Element;
    const id = target.getAttribute("href").substring(1)
    if(sections.current && sections.current.hasOwnProperty(id)) {
      const element = sections.current[id]
      element.scrollIntoView({behavior: "smooth"});
    }
  }
  return (
    <main className={className}>
      <DesktopNavigation>
        <Link href="#food" onClick={onClick}>Food</Link>
        <Link href="#cocktails" onClick={onClick}>Cocktails</Link>
        <Link
          href="#"
          underline={false}
          onFocus={setGold}
          onBlur={setWhite}
          onMouseEnter={setGold}
          onMouseLeave={setWhite}
          onClick={onClick}
          >
          <TextLogo fill={logoColor.name} shade={logoColor.shade} />
        </Link>
        <Link href="#gallery" onClick={onClick}>Gallery</Link>
        <Link href="#contact" onClick={onClick}>Contact</Link>
      </DesktopNavigation>
      <Grid className='content'>
        <Image src={theLastWordSrc} />
        {menus && menus.map(({title, id, categories}) => {
          return (
            <div ref={setRef(id)}>
              <FoodMenu title={title} categories={categories} />
            </div>
          )
        })}
    </Grid>
  </main>
  )
}

const PageView: FunctionComponent<PageProps> = styled(Page)`
  .content {
    ${maxWidth(SIZES.C_XL)}
    ${margin(SIZES.S0, SIZES.AUTO)}
  }
`

export default PageView