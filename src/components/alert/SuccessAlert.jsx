import React from 'react';
import FlyIn from '../transition/FlyIn';
import style from './AlertContainer.module.css';

const SuccessAlert = ({ message }) => {
  return (
    <FlyIn className={style['alertContainer'] + ' bg-success'}>
      <p className="h5">{message} 🎉</p>
    </FlyIn>
  );
};

export default SuccessAlert;
