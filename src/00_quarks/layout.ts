import { createGlobalStyle } from 'styled-components'
import { SIZES, getSize } from './sizing'

export enum LAYOUT_BOX_SIZING {
    BORDER_BOX,
    CONTENT_BOX
}

type BoxSizing = {
    [key in LAYOUT_BOX_SIZING]: string
}

export enum LAYOUT_CONTAINER {
    DEFAULT,
    SMALL,
    MEDIUM,
    LARGE,
    EXTRA_LARGE,
    EXTRA_LARGE_X2
}

type Container = {
    [key in LAYOUT_CONTAINER]: string
}

export enum LAYOUT_DISPLAY {
    BLOCK,
    CONTENTS,
    FLEX,
    FLOW_ROOT,
    GRID,
    HIDDEN,
    INLINE_BLOCK,
    INLINE_FLEX,
    INLINE_GRID,
    INLINE,
    TABLE_CAPTION,
    TABLE_CELL,
    TABLE_COLUMN_GROUP,
    TABLE_COLUMN,
    TABLE_FOOTER_GROUP,
    TABLE_HEADER_GROUP,
    TABLE_ROW_GROUP,
    TABLE_ROW,
    TABLE
}

type Dispay = {
    [key in LAYOUT_DISPLAY]: string
}

export enum LAYOUT_FLOAT {
    LEFT,
    RIGHT,
    NONE
}

type Float = {
    [key in LAYOUT_FLOAT]: string
}

export enum LAYOUT_CLEAR {
    BOTH,
    LEFT,
    NONE,
    RIGHT
}

type Clear = {
    [key in LAYOUT_CLEAR]: string
}

export enum LAYOUT_OVERFLOW {
    AUTO,
    HIDDEN,
    SCROLL,
    VISIBLE,
    XAUTO,
    XHIDDEN,
    XSCROLL,
    YAUTO,
    YHIDDEN,
    YSCROLL
}

type Overflow = {
    [key in LAYOUT_OVERFLOW]: string
}

export enum LAYOUT_POSITION {
    ABSOLUTE,
    FIXED,
    RELATIVE,
    STATIC,
    STICKY
}

type Position = {
    [key in LAYOUT_POSITION]: string
}

export enum LAYOUT_ZINDEX {
    ZNEG10,
    Z0,
    Z10,
    Z20,
    Z30,
    Z40,
    Z50,
    ZAUTO
  }

  type Zindex = {
    [key in LAYOUT_ZINDEX]: number | string
  }

interface Layout {
    container: Container,
    boxSizing: BoxSizing,
    display: Dispay,
    float: Float,
    clear: Clear,
    position: Position,
    overflow: Overflow,
    zIndex: Zindex
}

const layout: Layout = {
    boxSizing: {
        [LAYOUT_BOX_SIZING.BORDER_BOX]: 'border-box',
        [LAYOUT_BOX_SIZING.CONTENT_BOX]: 'content-box'
    },
    container: {
        [LAYOUT_CONTAINER.DEFAULT]: getSize(SIZES.FULL),
        [LAYOUT_CONTAINER.SMALL]: getSize(SIZES.C_SM),
        [LAYOUT_CONTAINER.MEDIUM]: getSize(SIZES.C_MD),
        [LAYOUT_CONTAINER.LARGE]: getSize(SIZES.C_LG),
        [LAYOUT_CONTAINER.EXTRA_LARGE]: getSize(SIZES.C_XL),
        [LAYOUT_CONTAINER.EXTRA_LARGE_X2]: getSize(SIZES.C_2XL)
    },
    display: {
        [LAYOUT_DISPLAY.BLOCK]: 'block',
        [LAYOUT_DISPLAY.CONTENTS]: 'contents',
        [LAYOUT_DISPLAY.FLEX]: 'flex',
        [LAYOUT_DISPLAY.FLOW_ROOT]: 'flow-root',
        [LAYOUT_DISPLAY.GRID]: 'grid',
        [LAYOUT_DISPLAY.HIDDEN]: 'hidden',
        [LAYOUT_DISPLAY.INLINE_BLOCK]: 'inline-block',
        [LAYOUT_DISPLAY.INLINE_FLEX]: 'inline-flex',
        [LAYOUT_DISPLAY.INLINE_GRID]: 'inline-grid',
        [LAYOUT_DISPLAY.INLINE]: 'inline',
        [LAYOUT_DISPLAY.TABLE_CAPTION]: 'table-caption',
        [LAYOUT_DISPLAY.TABLE_CELL]: 'table-cell',
        [LAYOUT_DISPLAY.TABLE_COLUMN_GROUP]: 'table-column-group',
        [LAYOUT_DISPLAY.TABLE_COLUMN]: 'table-column',
        [LAYOUT_DISPLAY.TABLE_FOOTER_GROUP]: 'table-footer-group',
        [LAYOUT_DISPLAY.TABLE_HEADER_GROUP]: 'table-header-group',
        [LAYOUT_DISPLAY.TABLE_ROW_GROUP]: 'table-row-group',
        [LAYOUT_DISPLAY.TABLE_ROW]: 'table-row',
        [LAYOUT_DISPLAY.TABLE]: 'table'
    },
    float: {
        [LAYOUT_FLOAT.LEFT]: 'left',
        [LAYOUT_FLOAT.RIGHT]: 'right',
        [LAYOUT_FLOAT.NONE]: 'none'
    },
    clear: {
        [LAYOUT_CLEAR.BOTH]: 'both',
        [LAYOUT_CLEAR.LEFT]: 'left',
        [LAYOUT_CLEAR.NONE]: 'none',
        [LAYOUT_CLEAR.RIGHT]: 'right'
    },
    position: {
        [LAYOUT_POSITION.ABSOLUTE]: 'absolute',
        [LAYOUT_POSITION.FIXED]: 'fixed',
        [LAYOUT_POSITION.RELATIVE]: 'relative',
        [LAYOUT_POSITION.STATIC]: 'static',
        [LAYOUT_POSITION.STICKY]: 'sticky'
    },
    overflow: {
        [LAYOUT_OVERFLOW.AUTO]: 'overflow: auto;',
        [LAYOUT_OVERFLOW.HIDDEN]: 'overflow: hidden;',
        [LAYOUT_OVERFLOW.SCROLL]: 'overflow: scroll;',
        [LAYOUT_OVERFLOW.VISIBLE]: 'overflow: visible;',
        [LAYOUT_OVERFLOW.XAUTO]: 'overflow-x: auto;',
        [LAYOUT_OVERFLOW.XHIDDEN]: 'overflow-x: hidden;',
        [LAYOUT_OVERFLOW.XSCROLL]: 'overflow-x: scroll;',
        [LAYOUT_OVERFLOW.YAUTO]: 'overflow-y: auto;',
        [LAYOUT_OVERFLOW.YHIDDEN]: 'overflow-y: hidden;',
        [LAYOUT_OVERFLOW.YSCROLL]: 'overflow-y: scroll;'
    },
    zIndex: {
        [LAYOUT_ZINDEX.ZNEG10]: -10,
        [LAYOUT_ZINDEX.Z0]: 0,
        [LAYOUT_ZINDEX.Z10]: 10,
        [LAYOUT_ZINDEX.Z20]: 20,
        [LAYOUT_ZINDEX.Z30]: 30,
        [LAYOUT_ZINDEX.Z40]: 40,
        [LAYOUT_ZINDEX.Z50]: 50,
        [LAYOUT_ZINDEX.ZAUTO]: 'auto'
    }
}

export const container = (containerType: LAYOUT_CONTAINER): string => {
    const size = layout.container[containerType]
    if (containerType === LAYOUT_CONTAINER.DEFAULT) {
        return `width: ${size};`
    }
    return `max-width: ${size};`
}

const buildPositioning = (type: string) => (value: SIZES) => {
    return `${type}: ${getSize(value)};`
}

export const boxSizing = (sizingType: LAYOUT_BOX_SIZING): string => `box-sizing: ${layout.boxSizing[sizingType]};`

export const display = (displayType: LAYOUT_DISPLAY): string => `display: ${layout.display[displayType]};`

export const float = (floatType: LAYOUT_FLOAT): string => `float: ${layout.float[floatType]};`

export const clear = (clearType: LAYOUT_CLEAR): string => `clear: ${layout.clear[clearType]};`

export const position = (positionType: LAYOUT_POSITION): string => `position: ${layout.position[positionType]};`

export const top = buildPositioning('top')

export const bottom = buildPositioning('bottom')

export const right = buildPositioning('right')

export const left = buildPositioning('left')

export const overflow = (overflowType: LAYOUT_OVERFLOW): string => layout.overflow[overflowType]

export const zIndex = (key: LAYOUT_ZINDEX): string => `z-index: ${layout.zIndex[key]};`

export const DefaultBoxSizing = createGlobalStyle`
    body * {
        ${boxSizing(LAYOUT_BOX_SIZING.BORDER_BOX)}
    }
`