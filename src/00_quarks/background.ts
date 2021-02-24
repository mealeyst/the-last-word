import { buildColorStyle } from './colors'

export enum BACKGROUND_ATTACHMENT {
  FIXED,
  LOCAL,
  SCROLL
}

type Attachment = {
  [key in BACKGROUND_ATTACHMENT]: string
}

export enum BACKGROUND_CLIP {
  BORDER,
  PADDING,
  CONTENT,
  TEXT
}

type Clip = {
  [key in BACKGROUND_CLIP]: string
}

export enum BACKGROUND_OPACITY {
  OPACITY_0,
  OPACITY_5,
  OPACITY_10,
  OPACITY_20,
  OPACITY_25,
  OPACITY_30,
  OPACITY_40,
  OPACITY_50,
  OPACITY_60,
  OPACITY_70,
  OPACITY_80,
  OPACITY_90,
  OPACITY_95,
  OPACITY_100
}

type Opacity = {
  [key in BACKGROUND_OPACITY]: number
}

export enum BACKGROUND_POSITION {
  BOTTOM,
  CENTER,
  LEFT,
  LEFT_BOTTOM,
  LEFT_TOP,
  RIGHT,
  RIGHT_BOTTOM,
  RIGHT_TOP,
  TOP
}

type Position = {
  [key in BACKGROUND_POSITION]: string
}

export enum BACKGROUND_REPEAT {
  REPEAT,
  NO_REPEAT,
  REPEAT_X,
  REPEAT_Y,
  ROUND,
  SPACE
}

type Repeat = {
  [key in BACKGROUND_REPEAT]: string
}

export enum BACKGROUND_SIZE {
  AUTO,
  COVER,
  CONTAIN
}

type Size = {
  [key in BACKGROUND_SIZE]: string
}

interface Background {
  attachment: Attachment,
  clip: Clip,
  position: Position,
  repeat: Repeat,
  size: Size
  opacity: Opacity
}


const background: Background = {
  attachment: {
    [BACKGROUND_ATTACHMENT.FIXED]: 'fixed',
    [BACKGROUND_ATTACHMENT.LOCAL]: 'local',
    [BACKGROUND_ATTACHMENT.SCROLL]: 'scroll'
  },
  clip: {
    [BACKGROUND_CLIP.BORDER]: 'border-box',
    [BACKGROUND_CLIP.PADDING]: 'padding-box',
    [BACKGROUND_CLIP.CONTENT]: 'content-box',
    [BACKGROUND_CLIP.TEXT]: 'text'
  },
  position: {
    [BACKGROUND_POSITION.BOTTOM]: 'bottom',
    [BACKGROUND_POSITION.CENTER]: 'center',
    [BACKGROUND_POSITION.LEFT]: 'left',
    [BACKGROUND_POSITION.LEFT_BOTTOM]: 'left bottom',
    [BACKGROUND_POSITION.LEFT_TOP]: 'left top',
    [BACKGROUND_POSITION.RIGHT]: 'right',
    [BACKGROUND_POSITION.RIGHT_BOTTOM]: 'right bottom',
    [BACKGROUND_POSITION.RIGHT_TOP]: 'right top',
    [BACKGROUND_POSITION.TOP]: 'top'
  },
  repeat: {
    [BACKGROUND_REPEAT.REPEAT]: 'repeat',
    [BACKGROUND_REPEAT.NO_REPEAT]: 'no-repeat',
    [BACKGROUND_REPEAT.REPEAT_X]: 'repeat-x',
    [BACKGROUND_REPEAT.REPEAT_Y]: 'repeat-y',
    [BACKGROUND_REPEAT.ROUND]: 'round',
    [BACKGROUND_REPEAT.SPACE]: 'space'
  },
  size: {
    [BACKGROUND_SIZE.AUTO]: 'auto',
    [BACKGROUND_SIZE.CONTAIN]: 'contain',
    [BACKGROUND_SIZE.COVER]: 'cover'
  },
  opacity: {
    [BACKGROUND_OPACITY.OPACITY_0]: 0,
    [BACKGROUND_OPACITY.OPACITY_5]: 0.05,
    [BACKGROUND_OPACITY.OPACITY_10]: 0.1,
    [BACKGROUND_OPACITY.OPACITY_20]: 0.2,
    [BACKGROUND_OPACITY.OPACITY_25]: 0.25,
    [BACKGROUND_OPACITY.OPACITY_30]: 0.3,
    [BACKGROUND_OPACITY.OPACITY_40]: 0.4,
    [BACKGROUND_OPACITY.OPACITY_50]: 0.5,
    [BACKGROUND_OPACITY.OPACITY_60]: 0.6,
    [BACKGROUND_OPACITY.OPACITY_70]: 0.7,
    [BACKGROUND_OPACITY.OPACITY_80]: 0.8,
    [BACKGROUND_OPACITY.OPACITY_90]: 0.9,
    [BACKGROUND_OPACITY.OPACITY_95]: 0.95,
    [BACKGROUND_OPACITY.OPACITY_100]: 1
  }
}

export const backgroundAttachment = (key: BACKGROUND_ATTACHMENT): string => `background-attachment: ${background.attachment[key]};`

export const backgroundColor = buildColorStyle('background-color')

export const backgroundClip = (key: BACKGROUND_CLIP): string => `background-clip: ${background.clip[key]};`

export const backgroundImage = (url: string): string => `background-image: url(${url});`

export const backgroundPosition = (key: BACKGROUND_POSITION): string => `background-position: ${background.position[key]};`

export const backgroundRepeat = (key: BACKGROUND_REPEAT): string => `background-repeat: ${background.repeat[key]};`

export const backgroundSize = (key: BACKGROUND_SIZE): string =>  `background-size: ${background.size[key]};`

export const backgroundOpacity = (key: BACKGROUND_OPACITY): string => `opacity: ${background.opacity[key]};`