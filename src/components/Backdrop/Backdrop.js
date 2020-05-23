import styled from 'styled-components';
import { string } from 'prop-types';

import BackdropBase from './BackdropBase';

const Backdrop = styled(BackdropBase)`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: ${({ bgColor }) => bgColor};
`;

Backdrop.propTypes = {
  bgColor: string
};

Backdrop.defaultProps = {
  bgColor: 'rgba(0, 0, 0, 0.5)'
};

export default Backdrop;
