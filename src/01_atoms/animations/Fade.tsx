import React, { ReactNode, useEffect, useState } from "react";
import styled, { keyframes } from 'styled-components'

type FadeType = {
  className?: string,
  children: ReactNode | ReactNode[],
  duration?: number,
  show?: boolean,
}

const Fade = ({ className, children, show, }: FadeType) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    shouldRender && (
      <div
        className={className}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
from {
  opacity: 1;
}
to {
  opacity: 0;
}
`

const StyledFade =  styled(Fade)`
  animation-name: ${props => props.show ? fadeIn : fadeOut};
  animation-duration: ${props => props.duration}s;
  animation-timing-function: ease-in-out;
`

StyledFade.defaultProps = {
  duration: 0.25
}

export default StyledFade