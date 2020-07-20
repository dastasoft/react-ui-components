import React from 'react';
import styled from 'styled-components';
import { bool, string } from 'prop-types';

const Caret = ({ up, down, left, fill }) => (
  <Wrapper
    up={up}
    down={down}
    left={left}
    aria-hidden="true"
    focusable="false"
    data-icon="caret-up"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 192 512"
  >
    <path
      fill={fill}
      d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"
    />
  </Wrapper>
);

Caret.propTypes = {
  up: bool,
  down: bool,
  left: bool,
  fill: string
};

Caret.defaultProps = {
  up: false,
  down: false,
  left: false,
  fill: 'currentColor'
};

export default Caret;

const Wrapper = styled.svg`
  transform: ${({ up, down, left }) => {
    if (up) return 'rotate(-90deg)';
    if (down) return 'rotate(90deg)';
    if (left) return 'rotate(180deg)';
    return '';
  }};
`;
