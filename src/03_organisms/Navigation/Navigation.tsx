import React, { Fragment, ReactNode, FunctionComponent } from 'react'
import { useMediaQuery } from 'react-responsive'

import { queries, QUERY_TARGETS, QUERY_SIZES } from '../../00_quarks/media-query';
import Link, { LinkProps } from '../../01_atoms/Link/Link';
import DesktopNavigation from "../../02_molecules/DesktopNavigation/DesktopNavigation";
import MobileNavigation from "../../02_molecules/MobileNavigation/MobileNavigation";


type NavigationProps = {
  mobileChildren: ReactNode[],
  desktopChildren: ReactNode[]
}

export const Navigation: FunctionComponent<NavigationProps> = ({ mobileChildren, desktopChildren }) => {
  const isMobile = useMediaQuery({query: `(${queries.targets[QUERY_TARGETS.MAX_WIDTH]}: ${queries.sizes[QUERY_SIZES.X_LARGE]})`})
  const isLaptopOrDesktop = useMediaQuery({query: `(${queries.targets[QUERY_TARGETS.MIN_WIDTH]}: ${queries.sizes[QUERY_SIZES.X_LARGE]})`})
  return (
    <Fragment>
      {isMobile &&
        <MobileNavigation>
          {mobileChildren}
        </MobileNavigation>
      }
      {isLaptopOrDesktop &&
        <DesktopNavigation>
          {desktopChildren}
        </DesktopNavigation>
      }
    </Fragment>
  )
}

export default Navigation