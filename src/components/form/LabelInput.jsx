import React from 'react';

const LabelInput = ({ value, onChange, ref, type, label, error=false, className = '', required=false, id=Math.random(), placeholder='' }) => {
  return (
    <>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        required={required}
        type={type}
        className={`form-control ${error?'border-danger':''} ${className}`}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default LabelInput;
