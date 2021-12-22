import React from 'react';
import styled, { keyframes } from 'styled-components';

const LoadingIcons = () => {
  return (
    <LoadingIcon>
      <i className="fas fa-spinner fa-xl"></i>
    </LoadingIcon>
  );
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingIcon = styled.div`
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;

export default LoadingIcons;
