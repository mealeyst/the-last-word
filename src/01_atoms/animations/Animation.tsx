import React, { ReactNode } from 'react'
import Fade from './Fade'

export enum ANIMATION_NAMES {
  FADE,
}

const Animations = {
  [ANIMATION_NAMES.FADE]: Fade
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
  console.log(props)
  const RenderAnimation = Animations[name]
  console.log("What we got!?", RenderAnimation)
  return (
    <RenderAnimation {...props} />
  )
}

export default Animation