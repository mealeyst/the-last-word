import React, { FunctionComponent } from 'react'
import styled, { css } from 'styled-components'
import { buildColorStyle, COLORS } from '../../00_quarks/colors'
import { minHeight, SIZES } from '../../00_quarks/sizing'

export type TextLogoProps = {
  className?: string,
  fill?: COLORS,
  shade?: number,
  minHeight?: SIZES
}

const TextLogo: FunctionComponent<TextLogoProps> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 728 728">
    <path className="text" d="M152.9,298a56,56,0,0,0-14.05,1.6,29,29,0,0,0-11.07,5.53,35.7,35.7,0,0,0-8.73,11A91.59,91.59,0,0,0,112,334h-2.77V295h133.5v39H240a91.59,91.59,0,0,0-7-17.88,35.7,35.7,0,0,0-8.73-11,29,29,0,0,0-11.07-5.53A56,56,0,0,0,199.1,298h-7.66V443.62H211v3H141v-3h19.59V298Z" transform="translate(-9.45 -8.37)"/>
    <path className="text" d="M330.89,295v3H311.3V443.62h35.13a45.22,45.22,0,0,0,14.16-2.34A39.24,39.24,0,0,0,374,433.51a54.55,54.55,0,0,0,11.29-14.06,74,74,0,0,0,7.77-21h2.77V446.6h-135v-3h19.59V298H260.84v-3Z" transform="translate(-9.45 -8.37)"/>
    <path className="text" d="M467.58,295v3H452l38.33,112.2h.42l22.36-63.44L496.53,298H485v-3h63.66v3h-19.8l38.54,112.42h.43L607.24,298H588.93v-3h39.18v3H610.86L556.15,452.35H550L515.05,351.64h-.42L478.86,452.35h-6.18L419.88,298H402.42v-3Z" transform="translate(-9.45 -8.37)"/>
    <rect className="border" width="490" height="490" transform="translate(14, 160) rotate(45, 349, 349)" stroke-alignment="outer"/>
  </svg>
)

const StyledTextLogo: FunctionComponent<TextLogoProps> = styled(TextLogo)`
${({minHeight: minHeightProp = SIZES.S14}) => `${minHeight(minHeightProp)}`}
  .text{
    ${({fill = COLORS.GREY, shade = 0}) => `${buildColorStyle('fill')(fill, shade)}`}
    transition: fill 0.2s ease-in;
  }
  .border {
    fill: none;
    ${({fill = COLORS.GREY, shade = 0}) => `${buildColorStyle('stroke')(fill, shade)}`}
    transition: stroke 0.2s ease-in;
    stroke-width: 18;
  }
`

export default StyledTextLogo