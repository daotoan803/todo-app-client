import React from 'react';
import { useSpring, animated } from 'react-spring';

const FlyIn = ({ children, className, from = 'left' }) => {
  const animate = useSpring({
    from: {
      transform: from === 'left' ? 'translateX(-1000px)' : 'translateX(5000px)',
    },
    to: {
      transform: 'translateX(0)',
    },
    config: {
      duration: 500,
    },
  });

  return (
    <animated.div style={animate} className={className}>
      {children}
    </animated.div>
  );
};

export default FlyIn;
