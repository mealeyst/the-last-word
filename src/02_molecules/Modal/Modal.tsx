import React, { FunctionComponent, ReactNode, MouseEventHandler } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { backgroundColor } from '../../00_quarks/background'
import { borderColor, borderStyle, borderWidth, BORDER_STYLES } from '../../00_quarks/border'
import { alignItem, BOX_ALIGNMENT } from '../../00_quarks/boxalignment'
import { COLORS } from '../../00_quarks/colors'
import { flexboxDirection, flexboxFlex, flexboxWrap, FLEXBOX_DIRECTION, FLEXBOX_FLEX, FLEXBOX_WRAP } from '../../00_quarks/flexbox'
import { display, LAYOUT_DISPLAY, LAYOUT_POSITION, left, position, right, top } from '../../00_quarks/layout'
import { height, SIZES, width } from '../../00_quarks/sizing'
import { padding } from '../../00_quarks/spacing'
import Animation, { ANIMATION_NAMES } from '../../01_atoms/Animations/Animation';
import { Button } from '../../01_atoms/Inputs'

export type ModalProps = {
  className?: string
  children: ReactNode,
  container: HTMLElement,
  show: boolean
  onClose: MouseEventHandler<HTMLButtonElement>
}

export const Modal: FunctionComponent<ModalProps> = ({ className, children, container, show, onClose: handleClose }) => {
  console.log(className)
  if(show) {
    document.body.style.overflow = 'hidden';
    return createPortal(
      <Animation name={ANIMATION_NAMES.FADE} show={show} duration={0.5}>
        <div className={className}>
          <main className='dialog'>
              <Button className='dialog__close' onClick={handleClose}>Close</Button>
              <section>
                {children}
              </section>
          </main>
        </div>
        </Animation>
      , container)
  }
  document.body.style.overflow = 'unset';
  return null
}

const StyledModal = styled(Modal)`
  ${position(LAYOUT_POSITION.FIXED)}
  ${top(SIZES.HALF)}
  ${left(SIZES.HALF)}
  ${backgroundColor(COLORS.GREY, 9, 0.3)}
  ${width(SIZES.FULL)}
  ${height(SIZES.FULL)}
  transform: translate(-50%, -50%);

  .dialog {
    ${backgroundColor(COLORS.GREY, 10)}
    ${height(SIZES.NINE_TWELFTHS)}
    ${width(SIZES.NINE_TWELFTHS)}
    ${position(LAYOUT_POSITION.ABSOLUTE)}
    ${flexboxDirection(FLEXBOX_DIRECTION.FLEX_COL)}
    ${alignItem(BOX_ALIGNMENT.FLEX_START)}
    ${display(LAYOUT_DISPLAY.FLEX)}
    ${top(SIZES.HALF)}
    ${left(SIZES.HALF)}
    ${borderStyle(BORDER_STYLES.DOUBLE)}
    ${borderColor(COLORS.GREY,0)}
    ${borderWidth(SIZES.S1)}

    transform: translate(-50%, -50%);
    box-shadow: 0 0.3rem .75rem rgba(0, 0, 0, 0.8);

    .dialog__close {
      ${position(LAYOUT_POSITION.ABSOLUTE)}
      ${top(SIZES.S4, true)}
      ${right(SIZES.S4, true)}
    }

    // > header {
    //   ${flexboxFlex(FLEXBOX_FLEX.NONE)}
    //   ${width(SIZES.FULL)}
    //   ${display(LAYOUT_DISPLAY.FLEX)}
    //   ${flexboxDirection(FLEXBOX_DIRECTION.FLEX_ROW_REVERSE)}
    //   ${alignItem(BOX_ALIGNMENT.CENTER)}
    //   ${padding(SIZES.S4)}
    // }
    > section {
      ${display(LAYOUT_DISPLAY.FLEX)}
      ${alignItem(BOX_ALIGNMENT.FLEX_START)}
    }
  }
`



export default StyledModal