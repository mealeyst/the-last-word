import React, { ComponentType, ReactNode } from 'react'
import {default as Fade} from './Fade'
import {default as Shake} from './Shake'

export enum ANIMATION_NAMES {
  FADE,
  SHAKE
}

const Animations = {
  [ANIMATION_NAMES.FADE]: Fade,
  [ANIMATION_NAMES.SHAKE]: Shake
}

type AnimationProps = {
  children: ReactNode | ReactNode[],
  className?: string,
  duration?: number,
  name: ANIMATION_NAMES,
  show?: boolean,
}

const Animation = (props: AnimationProps) => {
  const { name } = props
  const RenderAnimation: ComponentType = Animations[name]
  return (
    <RenderAnimation {...props} />
  )
}

export default Animation