import React from 'react';
import { useSpring, animated } from 'react-spring';

const FlyIn = ({ children, className, from = 'left' }) => {
  const animate = useSpring({
    from: {
      transform: from === 'left' ? 'translateX(-1000px)' : 'translateX(5000px)',
      zIndex: 1021,
    },
    to: {
      transform: 'translateX(0)',
      zIndex: 1021,
    },
  });

  return (
    <animated.div style={animate} className={className}>
      {children}
    </animated.div>
  );
};

export default FlyIn;
