import { ThemeProvider } from 'styled-components'; 

import { color, SiteBackground } from './00_quarks/colors'
import { ImportFonts } from './00_quarks/typography'

const theme = {
  color
}

export const ThemeDecorator = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <SiteBackground />
      <ImportFonts />
      {children}
    </ThemeProvider>
  )
}