/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import styled from 'styled-components';
import { bool, func, node, string } from 'prop-types';

import Backdrop from '../Backdrop';
import CloseIcon from './assets/Close';

const Modal = ({
  className,
  children,
  show,
  onClick,
  title,
  titleStyles,
  closeIcon,
  closeColor,
  withHeader,
  bgColor,
  width,
  minWidth,
  height,
  minHeight,
  shadow,
  rounded,
  borderColor
}) => (
  <Wrapper className={className} show={show}>
    <Backdrop show={show} onClick={onClick} />
    <ModalWindow
      className={show ? 'open' : ''}
      bgColor={bgColor}
      minWidth={minWidth}
      width={width}
      minHeight={minHeight}
      height={height}
      borderColor={borderColor}
      rounded={rounded}
      shadow={shadow}
    >
      <Header withHeader={withHeader}>
        <span className={titleStyles}>{title}</span>{' '}
        <Close onClick={onClick}>
          {closeIcon || <CloseIcon fill={closeColor} />}
        </Close>
      </Header>
      <ModalContent>{children}</ModalContent>
    </ModalWindow>
  </Wrapper>
);

Modal.propTypes = {
  className: string,
  children: node,
  show: bool,
  onClick: func,
  title: string,
  titleStyles: string,
  closeIcon: node,
  closeColor: string,
  withHeader: bool,
  bgColor: string,
  width: string,
  minWidth: string,
  height: string,
  minHeight: string,
  shadow: bool,
  rounded: bool,
  borderColor: string
};

Modal.defaultProps = {
  className: '',
  children: null,
  show: false,
  onClick: () => {},
  title: '',
  titleStyles: '',
  closeIcon: null,
  closeColor: '#000000',
  withHeader: false,
  bgColor: 'white',
  width: '',
  minWidth: 'none',
  height: '',
  minHeight: 'none',
  shadow: false,
  rounded: false,
  borderColor: '#ccc'
};

export default React.memo(Modal);

const Wrapper = styled.div`
  display: ${({ show }) => (show ? 'flex' : 'none')};
  justify-content: center;
`;

const ModalWindow = styled.div`
  display: 'none';
  position: fixed;
  top: 50%;
  left: 50%;
  opacity: 0;
  z-index: 500;
  background-color: ${({ bgColor }) => bgColor};
  min-width: ${({ minWidth }) => minWidth};
  width: ${({ width }) => width};
  max-width: 90vw;
  min-height: ${({ minHeight }) => minHeight};
  height: ${({ height }) => height};
  max-height: 90vh;
  border: 1px solid ${({ borderColor }) => borderColor};
  border-radius: ${({ rounded }) => (rounded ? '1rem' : '')};
  box-shadow: ${({ shadow }) =>
    shadow ? '0 0 60px 10px rgba(0, 0, 0, 0.9)' : ''};
  padding: 16px;
  box-sizing: border-box;
  pointer-events: none;

  &.open {
    display: flex;
    flex-direction: column;
    opacity: 1;
    transform: translate(-50%, -50%);
    pointer-events: auto;
  }
`;

const Header = styled.div`
  display: ${({ withHeader }) => (withHeader ? 'flex' : 'none')};
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ withHeader }) => (withHeader ? '1rem' : 'none')};
`;

const Close = styled.span`
  cursor: pointer;
`;

const ModalContent = styled.div`
  padding: 1rem 2rem;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
