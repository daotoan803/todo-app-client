import React from 'react';
import styled, { keyframes } from 'styled-components';

const DangerAlert = ({ message }) => {
  return (
    <ALertContainer>
      <p className="h5">{message} 💀</p>
    </ALertContainer>
  );
};

export default DangerAlert;

const popout = keyframes`
  0% {
    left: -300px;
  }
`;

const ALertContainer = styled.div`
  background-color: var(--bs-danger);
  position: fixed;
  top: 20px;
  left: 0;
  z-index: 10000;
  padding: 20px 35px 20px 20px;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  overflow: hidden;
  animation: ${popout} 0.8s linear;
`;
