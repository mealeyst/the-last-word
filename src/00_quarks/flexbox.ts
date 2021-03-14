export enum FLEXBOX_DIRECTION {
  FLEX_ROW,
  FLEX_ROW_REVERSE,
  FLEX_COL,
  FLEX_COL_REVERSE
}

export enum FLEXBOX_WRAP {
  WRAP,
  WRAP_REVERSE,
  NOWRAP
}

export enum FLEXBOX_FLEX {
  ONE,
  AUTO,
  INITIAL,
  NONE
}

export enum FLEXBOX_GROW {
  ZERO,
  ONE
}

export enum FLEXBOX_SHRINK {
  ZERO,
  ONE
}

export enum FLEXBOX_ORDER {
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
  TEN,
  ELEVEN,
  TWELVE,
  FIRST,
  LAST,
  NONE
}

interface Flexbox {
  direction: {
    [key in FLEXBOX_DIRECTION]: string
  },
  flex: {
    [key in FLEXBOX_FLEX]: string
  },
  grow: {
    [key in FLEXBOX_GROW]: string
  },
  order: {
    [key in FLEXBOX_ORDER]: string
  },
  shrink: {
    [key in FLEXBOX_SHRINK]: string
  },
  wrap: {
    [key in FLEXBOX_WRAP]: string
  }
}

const flexbox = {
  direction: {
    [FLEXBOX_DIRECTION.FLEX_COL]: 'column',
    [FLEXBOX_DIRECTION.FLEX_COL_REVERSE]: 'column-reverse',
    [FLEXBOX_DIRECTION.FLEX_ROW]: 'row',
    [FLEXBOX_DIRECTION.FLEX_ROW_REVERSE]: 'row-reverse'
  },
  flex: {
    [FLEXBOX_FLEX.AUTO]: '1 1 0%',
    [FLEXBOX_FLEX.ONE]: '1 1 auto',
    [FLEXBOX_FLEX.INITIAL]: '0 1 auto',
    [FLEXBOX_FLEX.NONE]: 'none'
  },
  grow: {
    [FLEXBOX_GROW.ONE]: 1,
    [FLEXBOX_GROW.ZERO]: 0
  },
  order: {
    [FLEXBOX_ORDER.ONE]: 1,
    [FLEXBOX_ORDER.TWO]: 2,
    [FLEXBOX_ORDER.THREE]: 3,
    [FLEXBOX_ORDER.FOUR]: 4,
    [FLEXBOX_ORDER.FIVE]: 5,
    [FLEXBOX_ORDER.SIX]: 6,
    [FLEXBOX_ORDER.SEVEN]: 7,
    [FLEXBOX_ORDER.EIGHT]: 8,
    [FLEXBOX_ORDER.NINE]: 9,
    [FLEXBOX_ORDER.TEN]: 10,
    [FLEXBOX_ORDER.ELEVEN]: 11,
    [FLEXBOX_ORDER.TWELVE]: 12,
    [FLEXBOX_ORDER.FIRST]: -9999,
    [FLEXBOX_ORDER.LAST]: 9999,
    [FLEXBOX_ORDER.NONE]: 0
  },
  shrink: {
    [FLEXBOX_SHRINK.ONE]: 1,
    [FLEXBOX_SHRINK.ZERO]: 0
  },
  wrap: {
    [FLEXBOX_WRAP.NOWRAP]: 'nowrap',
    [FLEXBOX_WRAP.WRAP]: 'wrap',
    [FLEXBOX_WRAP.WRAP_REVERSE]: 'wrap-reverse'
  }
}

export const flexboxDirection = (direction: FLEXBOX_DIRECTION) => {
  return `flex-direction: ${flexbox.direction[direction]};`
}

export const flexboxFlex = (flex: FLEXBOX_FLEX) => {
  return `flex: ${flexbox.flex[flex]};`
}

export const flexboxGrow = (grow: FLEXBOX_GROW) => {
  return `flex-grow: ${flexbox.grow[grow]};`
}

export const flexboxOrder = (order: FLEXBOX_ORDER) => {
  return `order: ${flexbox.order[order]};`
}

export const flexboxShrink = (shrink: FLEXBOX_SHRINK) => {
  return `flex-shrink: ${flexbox.shrink[shrink]};`
}

export const flexboxWrap = (wrap: FLEXBOX_WRAP) => {
  return `flex-wrap: ${flexbox.wrap[wrap]};`
}