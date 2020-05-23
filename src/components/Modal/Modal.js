import styled from 'styled-components';
import { string, bool } from 'prop-types';

import ModalBase from './ModalBase';

const Modal = styled(ModalBase)`
  .modal {
    position: fixed;
    z-index: 500;
    background-color: ${({ bgColor }) => bgColor};
    width: ${({ width }) => width};
    max-width: 100%;
    height: ${({ height }) => height};
    max-height: 100%;
    border: 1px solid ${({ borderColor }) => borderColor};
    border-radius: ${({ rounded }) => (rounded ? '1rem' : '')};
    box-shadow: ${({ shadow }) =>
      shadow ? '0 0 60px 10px rgba(0, 0, 0, 0.9)' : ''};
    padding: 16px;
    top: 50%;
    left: 50%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    transform: translate(-50%, -50%);
    display: ${({ show }) => (show ? 'block' : 'none')};
    opacity: ${({ show }) => (show ? '1' : '0')};
  }
`;

Modal.propTypes = {
  bgColor: string,
  show: bool,
  width: string,
  height: string,
  shadow: bool,
  rounded: bool,
  borderColor: string
};

Modal.defaultProps = {
  bgColor: 'white',
  show: false,
  width: '600px',
  height: '400px',
  shadow: false,
  rounded: false,
  borderColor: '#ccc'
};

export default Modal;
