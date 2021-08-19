import React from 'react'
import { ThemeProvider } from 'styled-components'; 

import { color, SiteBackground } from './00_quarks/colors'
import { DefaultBoxSizing } from './00_quarks/layout'
import { BodySpacing } from './00_quarks/spacing'
import { ImportFonts } from './00_quarks/typography'

const theme = {
  color
}

export const ThemeDecorator = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <SiteBackground />
      <BodySpacing />
      <DefaultBoxSizing />
      <ImportFonts />
      {children}
    </ThemeProvider>
  )
}