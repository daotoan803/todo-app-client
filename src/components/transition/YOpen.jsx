import React from 'react';
import { useSpring, animated } from 'react-spring';

const YOpen = ({ children, className }) => {
  const animate = useSpring({
    from: { opacity: 0, height: 0, overflow: 'hidden' },
    to: { opacity: 1, height: 'auto' },
    config: { duration: 500 },
  });

  return (
    <animated.div style={animate} className={className}>
      {children}
    </animated.div>
  );
};

export default YOpen;
