import styled from 'styled-components';
import { string } from 'prop-types';

import SideDrawerBase from './SideDrawerBase';

const SideDrawer = styled(SideDrawerBase)`
  .drawer {
    position: fixed;
    width: 280px;
    max-width: ${({ maxW }) => maxW};
    height: 100%;
    left: 0;
    top: 0;
    z-index: 200;
    background-color: ${({ bgColor }) => bgColor};
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;
  }

  .open {
    transform: translateX(0);
  }

  .close {
    transform: translateX(-100%);
  }
`;

SideDrawer.propTypes = {
  bgColor: string,
  maxW: string
};

SideDrawer.defaultProps = {
  bgColor: 'white',
  maxW: '70%'
};

export default SideDrawer;
