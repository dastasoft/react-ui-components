/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { bool, func, string } from 'prop-types';

const BackdropBase = ({ className, show, onClick }) =>
  show ? <div className={className} onClick={onClick} /> : null;

BackdropBase.propTypes = {
  className: string.isRequired,
  show: bool,
  onClick: func
};

BackdropBase.defaultProps = {
  show: false,
  onClick: () => {}
};

export default BackdropBase;
