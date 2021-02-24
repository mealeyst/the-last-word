const baseSize = 16

export const computeRem = (pxValue: number) => `${pxValue / baseSize}rem`

const computePercent = (size: number) => `${size * 100}%`

export enum SIZES {
  S0,
  S0_1,
  S0_5,
  S1,
  S1_5,
  S2,
  S2_5,
  S3,
  S3_5,
  S4,
  S5,
  S6,
  S7,
  S8,
  S9,
  S10,
  S11,
  S12,
  S14,
  S16,
  S24,
  S28,
  S32,
  S36,
  S40,
  S44,
  S48,
  S52,
  S56,
  S60,
  S64,
  S72,
  S80,
  S96,
  C_SM,
  C_MD,
  C_LG,
  C_XL,
  C_2XL,
  HALF,
  THIRD,
  TWO_THIRDS,
  QUARTER,
  TWO_FOURTHS,
  THREE_FOURTHS,
  FIFTH,
  TWO_FIFTHS,
  THREE_FIFTHS,
  FOUR_FIFTHS,
  SIXTH,
  TWO_SIXTHS,
  THREE_SIXTHS,
  FOUR_SIXTHS,
  FIVE_SIXTHS,
  TWELFTH,
  TWO_TWELFTHS,
  THREE_TWELFTHS,
  FOUR_TWELFTHS,
  FIVE_TWELFTHS,
  SIX_TWELTHS,
  SEVEN_TWELTHS,
  EIGHT_TWELFTHS,
  NINE_TWELFTHS,
  TEN_TWELFTHS,
  ELEVEN_TWELTHS,
  FULL,
  TWO_HUNDRED,
  TWO_HUNDRED_FIFTY
}

type SizeInterface = {
  [size in SIZES]: string
}
export const sizeValues: SizeInterface  = {
  [SIZES.S0]: computeRem(0), // 0rem
  [SIZES.S0_1]: computeRem(1), //0.0625rem
  [SIZES.S0_5]: computeRem(2), //0.125rem
  [SIZES.S1]: computeRem(4), //0.25rem
  [SIZES.S1_5]: computeRem(6), //0.375rem
  [SIZES.S2]: computeRem(8), //0.5rem
  [SIZES.S2_5]: computeRem(10), //0.625rem
  [SIZES.S3]: computeRem(12), //0.75rem
  [SIZES.S3_5]: computeRem(14), //0.875rem
  [SIZES.S4]: computeRem(16), //1rem
  [SIZES.S5]: computeRem(20), //1.25rem
  [SIZES.S6]: computeRem(24), //1.5rem
  [SIZES.S7]: computeRem(28), //1.75rem
  [SIZES.S8]: computeRem(32), //2rem
  [SIZES.S9]: computeRem(36), //2.25rem
  [SIZES.S10]: computeRem(40), //2.5rem
  [SIZES.S11]: computeRem(44), //2.75rem
  [SIZES.S12]: computeRem(48), //3rem
  [SIZES.S14]: computeRem(56), //3.5rem
  [SIZES.S16]: computeRem(64), //4rem
  [SIZES.S24]: computeRem(96), //6rem
  [SIZES.S28]: computeRem(112), //7rem
  [SIZES.S32]: computeRem(128), //8rem
  [SIZES.S36]: computeRem(144), //9rem
  [SIZES.S40]: computeRem(160), //10rem
  [SIZES.S44]: computeRem(176), //11rem
  [SIZES.S48]: computeRem(192), //12rem
  [SIZES.S52]: computeRem(208), //13rem
  [SIZES.S56]: computeRem(224), //14rem
  [SIZES.S60]: computeRem(240), //15rem
  [SIZES.S64]: computeRem(256), //16rem
  [SIZES.S72]: computeRem(288), //18rem
  [SIZES.S80]: computeRem(320), //20rem
  [SIZES.S96]: computeRem(384), //24rem
  [SIZES.C_SM]: computeRem(640), //40rem (Used for container sizing)
  [SIZES.C_MD]: computeRem(768), //48rem (Used for container sizing)
  [SIZES.C_LG]: computeRem(1024), //64rem (Used for container sizing)
  [SIZES.C_XL]: computeRem(1280), //80rem (Used for container sizing)
  [SIZES.C_2XL]: computeRem(1536), //96rem (Used for container szing)
  [SIZES.HALF]: computePercent(1/2),
  [SIZES.THIRD]: computePercent(1/3),
  [SIZES.TWO_THIRDS]: computePercent(2/3),
  [SIZES.QUARTER]: computePercent(1/4),
  [SIZES.TWO_FOURTHS]: computePercent(2/4),
  [SIZES.THREE_FOURTHS]: computePercent(3/4),
  [SIZES.FIFTH]: computePercent(1/5),
  [SIZES.TWO_FIFTHS]: computePercent(2/5),
  [SIZES.THREE_FIFTHS]: computePercent(3/5),
  [SIZES.FOUR_FIFTHS]: computePercent(4/5),
  [SIZES.SIXTH]: computePercent(1/6),
  [SIZES.TWO_SIXTHS]: computePercent(2/6),
  [SIZES.THREE_SIXTHS]: computePercent(3/6),
  [SIZES.FOUR_SIXTHS]: computePercent(4/6),
  [SIZES.FIVE_SIXTHS]: computePercent(5/6),
  [SIZES.TWELFTH]: computePercent(1/12),
  [SIZES.TWO_TWELFTHS]: computePercent(2/12),
  [SIZES.THREE_TWELFTHS]: computePercent(3/12),
  [SIZES.FOUR_TWELFTHS]: computePercent(4/12),
  [SIZES.FIVE_TWELFTHS]: computePercent(5/12),
  [SIZES.SIX_TWELTHS]: computePercent(6/12),
  [SIZES.SEVEN_TWELTHS]: computePercent(7/12),
  [SIZES.EIGHT_TWELFTHS]: computePercent(8/12),
  [SIZES.NINE_TWELFTHS]: computePercent(9/12),
  [SIZES.TEN_TWELFTHS]: computePercent(10/12),
  [SIZES.ELEVEN_TWELTHS]: computePercent(11/12),
  [SIZES.FULL]: computePercent(1),
  [SIZES.TWO_HUNDRED]: computePercent(2),
  [SIZES.TWO_HUNDRED_FIFTY]: computePercent(2.5)
}


export const getSize = (key: SIZES): string => sizeValues[key]

const sizing = (type: string) => (size: SIZES): string => {
  return `${type}: ${getSize(size)};`
}

export const width = sizing('width')
export const height = sizing('height')
export const minWidth = sizing('min-width')
export const maxWidth = sizing('max-width')
export const minHeight = sizing('min-height')
export const maxHeight = sizing('max-height')