import { string } from "prop-types"

export enum BOX_ALIGNMENT {
  AUTO,
  BASELINE,
  CENTER,
  END,
  FLEX_END,
  FLEX_START,
  SPACE_AROUND,
  SPACE_BETWEEN,
  SPACE_EVENLY,
  START,
  STRETCH
}

const boxAlignmentValues = {
  [BOX_ALIGNMENT.AUTO]: 'auto',
  [BOX_ALIGNMENT.BASELINE]: 'baseline',
  [BOX_ALIGNMENT.CENTER]: 'center',
  [BOX_ALIGNMENT.END]: 'end',
  [BOX_ALIGNMENT.FLEX_END]: 'flex-end',
  [BOX_ALIGNMENT.FLEX_START]: 'flex-start',
  [BOX_ALIGNMENT.SPACE_AROUND]: 'space-around',
  [BOX_ALIGNMENT.SPACE_BETWEEN]: 'space-between',
  [BOX_ALIGNMENT.SPACE_EVENLY]: 'space-evenly',
  [BOX_ALIGNMENT.START]: 'start',
  [BOX_ALIGNMENT.STRETCH]: 'stretch'
}

type AlignContentTypes = {
  [BOX_ALIGNMENT.CENTER]: string,
  [BOX_ALIGNMENT.FLEX_END]: string,
  [BOX_ALIGNMENT.FLEX_START]: string,
  [BOX_ALIGNMENT.SPACE_AROUND]: string,
  [BOX_ALIGNMENT.SPACE_BETWEEN]: string,
  [BOX_ALIGNMENT.SPACE_EVENLY]: string,
}

type AlignItemTypes = {
  [BOX_ALIGNMENT.BASELINE]: string,
  [BOX_ALIGNMENT.CENTER]: string,
  [BOX_ALIGNMENT.FLEX_END]: string,
  [BOX_ALIGNMENT.FLEX_START]: string,
  [BOX_ALIGNMENT.STRETCH]: string
}

type AlignSelfTypes = {
  [BOX_ALIGNMENT.AUTO]: string,
  [BOX_ALIGNMENT.CENTER]: string,
  [BOX_ALIGNMENT.FLEX_END]: string,
  [BOX_ALIGNMENT.FLEX_START]: string,
  [BOX_ALIGNMENT.STRETCH]: string
}

type JustifyContentTypes = {
  [BOX_ALIGNMENT.CENTER]: string,
  [BOX_ALIGNMENT.FLEX_END]: string,
  [BOX_ALIGNMENT.FLEX_START]: string,
  [BOX_ALIGNMENT.SPACE_AROUND]: string,
  [BOX_ALIGNMENT.SPACE_BETWEEN]: string,
  [BOX_ALIGNMENT.SPACE_EVENLY]: string,
}

type JustifyItemTypes = {
  [BOX_ALIGNMENT.AUTO]: string,
  [BOX_ALIGNMENT.CENTER]: string,
  [BOX_ALIGNMENT.END]: string,
  [BOX_ALIGNMENT.START]: string,
  [BOX_ALIGNMENT.STRETCH]: string
}

type JustifySelfTypes = {
  [BOX_ALIGNMENT.AUTO]: string,
  [BOX_ALIGNMENT.CENTER]: string,
  [BOX_ALIGNMENT.END]: string,
  [BOX_ALIGNMENT.START]: string,
  [BOX_ALIGNMENT.STRETCH]: string
}

type PlaceContentTypes = {
  [BOX_ALIGNMENT.CENTER]: string,
  [BOX_ALIGNMENT.FLEX_END]: string,
  [BOX_ALIGNMENT.FLEX_START]: string,
  [BOX_ALIGNMENT.SPACE_AROUND]: string,
  [BOX_ALIGNMENT.SPACE_BETWEEN]: string,
  [BOX_ALIGNMENT.SPACE_EVENLY]: string,
  [BOX_ALIGNMENT.STRETCH]: string
}

type PlaceItemTypes = {
  [BOX_ALIGNMENT.AUTO]: string,
  [BOX_ALIGNMENT.CENTER]: string,
  [BOX_ALIGNMENT.END]: string,
  [BOX_ALIGNMENT.START]: string,
  [BOX_ALIGNMENT.STRETCH]: string
}

type PlaceSelfTypes = {
  [BOX_ALIGNMENT.AUTO]: string,
  [BOX_ALIGNMENT.CENTER]: string,
  [BOX_ALIGNMENT.END]: string,
  [BOX_ALIGNMENT.START]: string,
  [BOX_ALIGNMENT.STRETCH]: string
}

interface BoxAlignment {
  alignContent: AlignContentTypes,
  alignItem: AlignItemTypes,
  alignSelf: AlignSelfTypes,
  justifyContent: JustifyContentTypes,
  justifyItem: JustifyItemTypes,
  justifySelf: JustifySelfTypes,
  placeContent: PlaceContentTypes,
  placeItem: PlaceItemTypes,
  placeSelf: PlaceSelfTypes
}


const boxAlignment: BoxAlignment = {
  alignContent: {
    [BOX_ALIGNMENT.CENTER]: boxAlignmentValues[BOX_ALIGNMENT.CENTER],
    [BOX_ALIGNMENT.FLEX_END]: boxAlignmentValues[BOX_ALIGNMENT.FLEX_END],
    [BOX_ALIGNMENT.FLEX_START]: boxAlignmentValues[BOX_ALIGNMENT.FLEX_START],
    [BOX_ALIGNMENT.SPACE_AROUND]: boxAlignmentValues[BOX_ALIGNMENT.SPACE_AROUND],
    [BOX_ALIGNMENT.SPACE_BETWEEN]: boxAlignmentValues[BOX_ALIGNMENT.SPACE_BETWEEN],
    [BOX_ALIGNMENT.SPACE_EVENLY]: boxAlignmentValues[BOX_ALIGNMENT.SPACE_EVENLY]
  },
  alignItem: {
    [BOX_ALIGNMENT.BASELINE]: boxAlignmentValues[BOX_ALIGNMENT.BASELINE],
    [BOX_ALIGNMENT.CENTER]: boxAlignmentValues[BOX_ALIGNMENT.CENTER],
    [BOX_ALIGNMENT.FLEX_END]: boxAlignmentValues[BOX_ALIGNMENT.FLEX_END],
    [BOX_ALIGNMENT.FLEX_START]: boxAlignmentValues[BOX_ALIGNMENT.FLEX_START],
    [BOX_ALIGNMENT.STRETCH]: boxAlignmentValues[BOX_ALIGNMENT.STRETCH]
  },
  alignSelf: {
    [BOX_ALIGNMENT.AUTO]: boxAlignmentValues[BOX_ALIGNMENT.AUTO],
    [BOX_ALIGNMENT.CENTER]: boxAlignmentValues[BOX_ALIGNMENT.CENTER],
    [BOX_ALIGNMENT.FLEX_END]: boxAlignmentValues[BOX_ALIGNMENT.FLEX_END],
    [BOX_ALIGNMENT.FLEX_START]: boxAlignmentValues[BOX_ALIGNMENT.FLEX_START],
    [BOX_ALIGNMENT.STRETCH]: boxAlignmentValues[BOX_ALIGNMENT.STRETCH]
  },
  justifyContent: {
    [BOX_ALIGNMENT.CENTER]: boxAlignmentValues[BOX_ALIGNMENT.CENTER],
    [BOX_ALIGNMENT.FLEX_END]: boxAlignmentValues[BOX_ALIGNMENT.FLEX_END],
    [BOX_ALIGNMENT.FLEX_START]: boxAlignmentValues[BOX_ALIGNMENT.FLEX_START],
    [BOX_ALIGNMENT.SPACE_AROUND]: boxAlignmentValues[BOX_ALIGNMENT.SPACE_AROUND],
    [BOX_ALIGNMENT.SPACE_BETWEEN]: boxAlignmentValues[BOX_ALIGNMENT.SPACE_BETWEEN],
    [BOX_ALIGNMENT.SPACE_EVENLY]: boxAlignmentValues[BOX_ALIGNMENT.SPACE_EVENLY]
  },
  justifyItem: {
    [BOX_ALIGNMENT.AUTO]: boxAlignmentValues[BOX_ALIGNMENT.AUTO],
    [BOX_ALIGNMENT.CENTER]: boxAlignmentValues[BOX_ALIGNMENT.CENTER],
    [BOX_ALIGNMENT.END]: boxAlignmentValues[BOX_ALIGNMENT.END],
    [BOX_ALIGNMENT.START]: boxAlignmentValues[BOX_ALIGNMENT.START],
    [BOX_ALIGNMENT.STRETCH]: boxAlignmentValues[BOX_ALIGNMENT.STRETCH]
  },
  justifySelf: {
    [BOX_ALIGNMENT.AUTO]: boxAlignmentValues[BOX_ALIGNMENT.AUTO],
    [BOX_ALIGNMENT.CENTER]: boxAlignmentValues[BOX_ALIGNMENT.CENTER],
    [BOX_ALIGNMENT.END]: boxAlignmentValues[BOX_ALIGNMENT.END],
    [BOX_ALIGNMENT.START]: boxAlignmentValues[BOX_ALIGNMENT.START],
    [BOX_ALIGNMENT.STRETCH]: boxAlignmentValues[BOX_ALIGNMENT.STRETCH]
  },
  placeContent: {
    [BOX_ALIGNMENT.CENTER]: boxAlignmentValues[BOX_ALIGNMENT.CENTER],
    [BOX_ALIGNMENT.FLEX_END]: boxAlignmentValues[BOX_ALIGNMENT.FLEX_END],
    [BOX_ALIGNMENT.FLEX_START]: boxAlignmentValues[BOX_ALIGNMENT.FLEX_START],
    [BOX_ALIGNMENT.SPACE_AROUND]: boxAlignmentValues[BOX_ALIGNMENT.SPACE_AROUND],
    [BOX_ALIGNMENT.SPACE_BETWEEN]: boxAlignmentValues[BOX_ALIGNMENT.SPACE_BETWEEN],
    [BOX_ALIGNMENT.SPACE_EVENLY]: boxAlignmentValues[BOX_ALIGNMENT.SPACE_EVENLY],
    [BOX_ALIGNMENT.STRETCH]: boxAlignmentValues[BOX_ALIGNMENT.STRETCH],
  },
  placeItem: {
    [BOX_ALIGNMENT.AUTO]: boxAlignmentValues[BOX_ALIGNMENT.AUTO],
    [BOX_ALIGNMENT.CENTER]: boxAlignmentValues[BOX_ALIGNMENT.CENTER],
    [BOX_ALIGNMENT.END]: boxAlignmentValues[BOX_ALIGNMENT.END],
    [BOX_ALIGNMENT.START]: boxAlignmentValues[BOX_ALIGNMENT.START],
    [BOX_ALIGNMENT.STRETCH]: boxAlignmentValues[BOX_ALIGNMENT.STRETCH]
  },
  placeSelf: {
    [BOX_ALIGNMENT.AUTO]: boxAlignmentValues[BOX_ALIGNMENT.AUTO],
    [BOX_ALIGNMENT.CENTER]: boxAlignmentValues[BOX_ALIGNMENT.CENTER],
    [BOX_ALIGNMENT.END]: boxAlignmentValues[BOX_ALIGNMENT.END],
    [BOX_ALIGNMENT.START]: boxAlignmentValues[BOX_ALIGNMENT.START],
    [BOX_ALIGNMENT.STRETCH]: boxAlignmentValues[BOX_ALIGNMENT.STRETCH]
  }
}

export const alignContent = (key: keyof AlignContentTypes) => (
  `align-content: ${boxAlignment.alignContent[key]};`
)

export const alignItem = (key: keyof AlignItemTypes) => (
  `align-items: ${boxAlignment.alignItem[key]};`
)

export const alignSelf = (key: keyof AlignSelfTypes) => (
  `align-self: ${boxAlignment.alignSelf[key]};`
)

export const justifyContent = (key: keyof JustifyContentTypes) => (
  `justify-content: ${boxAlignment.justifyContent[key]};`
)

export const justifyItem = (key: keyof JustifyItemTypes) => (
  `just-content: ${boxAlignment.justifyItem[key]};`
)

export const justifySelf = (key: keyof JustifySelfTypes) => (
  `justify-self: ${boxAlignment.justifySelf[key]};`
)

export const placeContent = (key: keyof PlaceContentTypes) => (
  `place-content: ${boxAlignment.placeContent[key]};`
)

export const placeItem = (key: keyof PlaceItemTypes) => (
  `place-item: ${boxAlignment.placeItem[key]};`
)

export const placeSelf = (key: keyof PlaceSelfTypes) => (
  `place-self: ${boxAlignment.placeSelf[key]};`
)