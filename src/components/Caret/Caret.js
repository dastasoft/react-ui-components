import React from 'react';
import styled from 'styled-components';
import { bool, string } from 'prop-types';

const Caret = ({ down, fill }) => (
  <svg
    down={down}
    aria-hidden="true"
    focusable="false"
    data-icon="caret-up"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
  >
    <path
      fill={fill}
      d={
        down
          ? 'M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'
          : 'M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z'
      }
    />
  </svg>
);

Caret.propTypes = {
  down: bool,
  fill: string
};

Caret.defaultProps = {
  down: false,
  fill: 'currentColor'
};

export default Caret;
