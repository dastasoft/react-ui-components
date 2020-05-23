/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
import React from 'react';
import { string, func } from 'prop-types';

const ButtonBase = ({ className, type, text, onClick, ...other }) => {
  return (
    <button className={className} type={type} onClick={onClick} {...other}>
      {text}
    </button>
  );
};

ButtonBase.propTypes = {
  className: string.isRequired,
  type: string,
  text: string,
  onClick: func
};

ButtonBase.defaultProps = {
  type: 'submit',
  text: '',
  onClick: () => {}
};

export default ButtonBase;
