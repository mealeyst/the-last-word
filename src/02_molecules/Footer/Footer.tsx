import { faFacebookSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment, FunctionComponent } from "react";
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'

import { backgroundColor } from "../../00_quarks/background";
import { borderColor, borderStyle, borderWidth, BORDER_STYLES } from "../../00_quarks/border";
import { alignContent, alignItem, BOX_ALIGNMENT, justifyContent } from "../../00_quarks/boxalignment";
import { color, COLORS } from "../../00_quarks/colors";
import { flexboxDirection, flexboxWrap, FLEXBOX_DIRECTION, FLEXBOX_WRAP } from "../../00_quarks/flexbox";
import { display, LAYOUT_DISPLAY } from "../../00_quarks/layout";
import { maxWidth, SIZES } from "../../00_quarks/sizing";
import { margin, marginTop, padding } from "../../00_quarks/spacing";
import { fontSize, FONT_SIZE } from "../../00_quarks/typography";
import HarlemLineHustle from "../../01_atoms/Icons/HarlemLineHustle/HarlemLineHustle";
import Grid from "../../01_atoms/Layouts/Grid";
import Link from "../../01_atoms/Link/Link";
import H3 from "../../01_atoms/Typography/H3";
import P from "../../01_atoms/Typography/P";
import { mediaQuery, queries, QUERY_SIZES, QUERY_TARGETS } from "../../00_quarks/media-query";

export type FooterProps = {
  className?: string
}

const Sections = () => (
  <Fragment>
    <section>
      <H3>Hours:</H3>
      <P>Sunday - Saturday: 5:00PM - Close</P>
    </section>
    <section>
      <H3>Follow us:</H3>
      <Link href="https://www.facebook.com/TheLastWordHuntington/" underline={false} target="_blank">
        <FontAwesomeIcon className="social" icon={faFacebookSquare} />
      </Link>
      <Link href="https://www.instagram.com/thelastwordhuntington/" underline={false} target="_blank">
        <FontAwesomeIcon className="social" icon={faInstagramSquare}  />
      </Link>
    </section>
  </Fragment>
)

export const Footer: FunctionComponent<FooterProps> = ({ className }) => {
  const isMobile = useMediaQuery({query: `(${queries.targets[QUERY_TARGETS.MAX_WIDTH]}: ${queries.sizes[QUERY_SIZES.X_LARGE]})`})
  const isLaptopOrDesktop = useMediaQuery({query: `(${queries.targets[QUERY_TARGETS.MIN_WIDTH]}: ${queries.sizes[QUERY_SIZES.X_LARGE]})`})
  return (
    <footer className={className}>
      {
        isMobile &&
        <Grid
          templateColumns='1fr'
          templateRows='1fr 1fr'
          templateAreas="'top''bottom'"
        >
          <section>
            <H3>Hours:</H3>
            <P>Sunday - Saturday: 5:00PM - Close</P>
          </section>
          <section>
            <H3>Follow us:</H3>
            <Link href="https://www.facebook.com/TheLastWordHuntington/" underline={false} target="_blank">
              <FontAwesomeIcon className="social" icon={faFacebookSquare} />
            </Link>
            <Link href="https://www.instagram.com/thelastwordhuntington/" underline={false} target="_blank">
              <FontAwesomeIcon className="social" icon={faInstagramSquare}  />
            </Link>
          </section>
        </Grid>
      }
      { isLaptopOrDesktop &&
        <Grid
          templateColumns='auto auto'
          templateRows='auto'
          templateAreas="'left''right'"
        >
          <section>
            <H3>Hours:</H3>
            <P>Sunday - Saturday: 5:00PM - Close</P>
          </section>
          <section>
            <H3>Follow us:</H3>
            <Link href="https://www.facebook.com/TheLastWordHuntington/" underline={false} target="_blank">
              <FontAwesomeIcon className="social" icon={faFacebookSquare} />
            </Link>
            <Link href="https://www.instagram.com/thelastwordhuntington/" underline={false} target="_blank">
              <FontAwesomeIcon className="social" icon={faInstagramSquare}  />
            </Link>
          </section>
        </Grid>
      }
      <div className='info'>
        <P>This site was designed and built by:</P>
        <HarlemLineHustle />
      </div>
    </footer>
  )
}

const StyledFooter: FunctionComponent<FooterProps> = styled(Footer)`
  ${backgroundColor(COLORS.GREY, 10)}
  ${borderStyle(BORDER_STYLES.DOUBLE, BORDER_STYLES.NONE, BORDER_STYLES.NONE,   BORDER_STYLES.NONE)}
  ${borderColor(COLORS.GREY, 0)}
  ${borderWidth(SIZES.S1)}
  ${padding(SIZES.S4, SIZES.S0)}
  & section {
    width: 100%;
  }
  & .social {
    ${fontSize(FONT_SIZE.XL4)}
    path {
      ${color(COLORS.GREY, 0)}
      transition: all 0.25s ease-in-out
    }
  }
  & .social:hover path {
    ${color(COLORS.GOLD, 4)}
  }
  ${Grid}, .info {
    ${maxWidth(SIZES.C_XL)}
    ${margin(SIZES.S0, SIZES.AUTO)}
    ${padding(SIZES.S0, SIZES.S4, SIZES.S0)}
  }
  .info {
    ${marginTop(SIZES.S14)}
    ${display(LAYOUT_DISPLAY.FLEX)}
    ${flexboxWrap(FLEXBOX_WRAP.WRAP)}
    ${flexboxDirection(FLEXBOX_DIRECTION.FLEX_COL)}
    ${alignItem(BOX_ALIGNMENT.CENTER)}
  }
`

export default StyledFooter