import React from 'react';
import { bool, func, node, string } from 'prop-types';

import Backdrop from '../Backdrop';

const ModalBase = ({ className, children, show, onClick }) => (
  <div className={className}>
    <Backdrop show={show} onClick={onClick} />
    <div className="modal">{children}</div>
  </div>
);

ModalBase.propTypes = {
  className: string.isRequired,
  children: node,
  show: bool,
  onClick: func
};

ModalBase.defaultProps = {
  children: null,
  show: false,
  onClick: () => {}
};

export default React.memo(ModalBase);
