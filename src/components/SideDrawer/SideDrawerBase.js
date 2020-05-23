import React from 'react';
import { string, node, bool, func } from 'prop-types';

import Backdrop from '../Backdrop';

const SideDrawerBase = ({ className, children, logo, open, onClick }) => {
  return (
    <div className={className}>
      <Backdrop show={open} onClick={onClick} />
      <div className={`drawer ${open ? 'open' : 'close'}`}>
        {logo && { logo }}
        <nav>{children}</nav>
      </div>
    </div>
  );
};

SideDrawerBase.propTypes = {
  className: string.isRequired,
  children: node,
  logo: node,
  open: bool,
  onClick: func
};

SideDrawerBase.defaultProps = {
  children: null,
  logo: null,
  open: false,
  onClick: () => {}
};

export default SideDrawerBase;
