import React, { useState, FunctionComponent, MouseEventHandler, useRef } from 'react'
import styled from 'styled-components'
import InstagramFeed  from 'react-ig-feed'
import GoogleMapReact from 'google-map-react';

import { COLORS } from '../../00_quarks/colors';
import Grid from '../../01_atoms/Layouts/Grid';
import Link from '../../01_atoms/Link/Link';
import { Image } from '../../01_atoms/Image/Image';
import theLastWordSrc from '../../assets/the_last_word_render.jpeg';
import TextLogo from '../../01_atoms/TextLogo/TextLogo';
import FoodMenu, {FoodMenuProps } from '../../03_organisms/FoodMenu/FoodMenu';
import { maxWidth, SIZES } from '../../00_quarks/sizing';
import { margin } from '../../00_quarks/spacing';
import H3 from '../../01_atoms/Typography/H3';
import H2 from '../../01_atoms/Typography/H2';
import P from '../../01_atoms/Typography/P';
import Navigation from '../../03_organisms/Navigation/Navigation';

export type PageProps = {
  className: string,
  menus: FoodMenuProps[]
}

interface RefDictionary {
  [key: string]: HTMLElement;
}

const Page: FunctionComponent<PageProps>  = ({ className, menus }) => {
  const [open, setOpen] = useState(false)
  const onCloseClick = () => setOpen(false)
  const onOpenClick = () => setOpen(true)
  const [logoColor, setLogoColor] = useState({name: COLORS.GREY, shade: 0})
  const setGold = () => setLogoColor({name: COLORS.GOLD, shade:4 })
  const setWhite = () => setLogoColor({name: COLORS.GREY, shade: 0})
  const sections = useRef<RefDictionary>({});
  const setRef = (id: string) => (element: HTMLElement) => {
    sections.current[id] = element
  };
  const onClick: MouseEventHandler = (e) => {
    e.preventDefault()
    const target = e.target as Element;
    const id = target.getAttribute("href").substring(1)
    if(sections.current && sections.current.hasOwnProperty(id)) {
      const element = sections.current[id]
      element.scrollIntoView({behavior: "smooth"});
    }
    onCloseClick();
  }
  const desktopChildren = [
    <Link href="#food" onClick={onClick}>Food</Link>,
    <Link href="#cocktails" onClick={onClick}>Cocktails</Link>,
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
    </Link>,
    <Link href="#gallery" onClick={onClick}>Gallery</Link>,
    <Link href="#contact" onClick={onClick}>Contact</Link>
  ]
  const mobileChildren = [
    <Link shade={10} href="#food" onClick={onClick}>Food</Link>,
    <Link shade={10} href="#cocktails" onClick={onClick}>Cocktails</Link>,
    <Link shade={10} href="#gallery" onClick={onClick}>Gallery</Link>,
    <Link shade={10} href="#contact" onClick={onClick}>Contact</Link>
  ]
  return (
    <main className={className}>
      <Navigation
        desktopChildren={desktopChildren}
        mobileChildren={mobileChildren}
        open={open}
        onCloseClick={onCloseClick}
        onOpenClick={onOpenClick} />
      <Grid className='content'>
        <Image src={theLastWordSrc} />
        {menus && menus.map(({title, id, categories}) => {
          return (
            <div id={id} ref={setRef(id)}>
              <FoodMenu title={title} categories={categories} />
            </div>
          )
        })}
        <div id="gallery" ref={setRef('gallery')}>
          <H2>Gallery</H2>
          <H3>Coming soon...</H3>
        </div>
        <div id="contact" ref={setRef('contact')}>
          <H2>Contact Us</H2>
            <div>
              <P>The Last Word</P>
              <P>13 Wall Street</P>
              <P>Huntington, New York 11743</P>
              <P>Phone: (631) 629-4545</P>
              <P>Email: <Link href="Thelastwordhuntington@gmail.com">thelastwordhuntington@gmail.com</Link></P>
            </div>
        </div>
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