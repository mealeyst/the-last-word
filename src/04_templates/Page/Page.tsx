import React, { useState, FunctionComponent, MouseEventHandler, useRef } from 'react'
import styled from 'styled-components'

import { COLORS } from '../../00_quarks/colors';
import { margin } from '../../00_quarks/spacing';
import { maxWidth, SIZES } from '../../00_quarks/sizing';
import { TEXT_TRANSFORM } from '../../00_quarks/typography';

import { Image } from '../../01_atoms/Image/Image';
import Container from '../../01_atoms/Container/Container';
import Grid from '../../01_atoms/Layouts/Grid';
import H3 from '../../01_atoms/Typography/H3';
import Link from '../../01_atoms/Link/Link';
import P from '../../01_atoms/Typography/P';
import TextLogo from '../../01_atoms/TextLogo/TextLogo';

import Section from '../../02_molecules/Section/Section';

import FoodMenu, {FoodMenuProps } from '../../03_organisms/FoodMenu/FoodMenu';
import Navigation from '../../03_organisms/Navigation/Navigation';


import theLastWordSrc from '../../assets/the_last_word_render.jpeg';
import Footer from '../../02_molecules/Footer/Footer';

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
    const id = target.getAttribute("href")!.substring(1)
    if(sections.current && sections.current.hasOwnProperty(id)) {
      const element = sections.current[id]
      element.scrollIntoView({behavior: "smooth"});
    }
    onCloseClick();
  }
  const meta = {
    title: 'The Last Word - Huntington',
    description: 'Craft cocktails and the taste of Peru',
    canonical: 'http://example.com/path/to/page',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      }
    }
  };
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
              <FoodMenu id={id} title={title} categories={categories} ref={setRef(id)} />
          )
        })}
        <Section title="Gallery" id="gallery" ref={setRef('gallery')}>
          <Container>
            <H3>Coming soon...</H3>
          </Container>
        </Section>
        <Section title="Contact Us" id="contact" ref={setRef('contact')}>
            <Container>
              <P>The Last Word</P>
              <P>13 Wall Street</P>
              <P>Huntington, New York 11743</P>
              <P>Phone: <Link href="tel:6316294545" transform={TEXT_TRANSFORM.NORMAL_CASE}>(631) 629-4545</Link></P>
              <P>Email: <Link href="Thelastwordhuntington@gmail.com" transform={TEXT_TRANSFORM.NORMAL_CASE}>thelastwordhuntington@gmail.com</Link></P>
            </Container>
        </Section>
      </Grid>
      <Footer />
    </main>
  )
}

const PageView: FunctionComponent<PageProps> = styled(Page)`
background-color: #0B0D0E;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='30' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%2322262A' stroke-width='10' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E");
  .content {
    ${maxWidth(SIZES.C_XL)}
    ${margin(SIZES.S0, SIZES.AUTO)}
  }
`

export default PageView