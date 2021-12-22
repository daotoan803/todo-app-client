import React from 'react';
import { Transition } from 'react-transition-group';

const YOpen = ({ children, inProp }) => {
  //transition
  const duration = 300;

  const defaultStyle = {
    transition: `${duration}ms ease-out`,
    opacity: 0,
    height: 0,
    overflow: 'hidden',
  };

  const transitionStyles = {
    entering: { height: 0, opacity: 0 },
    entered: { height: 'auto', opacity: 1 },
    exiting: { height: 'auto', opacity: 1 },
    exited: { height: 0, opacity: 0 },
  };

  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}>
          {children}
        </div>
      )}
    </Transition>
  );
};

export default YOpen;
