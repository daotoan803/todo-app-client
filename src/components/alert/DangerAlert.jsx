import React from 'react';
import FlyIn from '../transition/FlyIn';
import style from './AlertContainer.module.css';

const DangerAlert = ({ message }) => {
  return (
    <FlyIn className={style['alertContainer'] + ' bg-danger'}>
      <p className="h5">{message} 💀</p>
    </FlyIn>
  );
};

export default DangerAlert;
