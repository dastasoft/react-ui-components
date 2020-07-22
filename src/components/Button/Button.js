import styled from 'styled-components';
import { string } from 'prop-types';

import ButtonBase from './ButtonBase';

const Button = styled(ButtonBase)`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: 600;
  color: ${({ textColor }) => textColor};
  text-transform: uppercase;
  padding: ${({ padding }) => padding};
  background: ${({ bgColor }) => bgColor};
  border: 2px solid ${({ borderColor }) => borderColor};
  border-radius: 0.75em;
  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
    background 150ms cubic-bezier(0, 0, 0.58, 1);
  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ darkerBgColor }) => darkerBgColor};
    border-radius: inherit;
    box-shadow: 0 0 0 2px ${({ borderColor }) => borderColor},
      0 0.625em 0 0 ${({ shadowColor }) => shadowColor};
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }
  &:hover {
    background: ${({ bgColor }) => bgColor};
    transform: translate(0, 0.25em);
    &::before {
      box-shadow: 0 0 0 2px ${({ borderColor }) => borderColor},
        0 0.5em 0 0 ${({ shadowColor }) => shadowColor};
      transform: translate3d(0, 0.5em, -1em);
    }
  }
  &:active {
    background: ${({ bgColor }) => bgColor};
    transform: translate(0em, 0.75em);
    &::before {
      box-shadow: 0 0 0 2px ${({ borderColor }) => borderColor},
        0 0 ${({ shadowColor }) => shadowColor};
      transform: translate3d(0, 0, -1em);
    }
  }

  &:disabled {
    background: gray;
  }
`;

Button.propTypes = {
  textColor: string,
  bgColor: string,
  darkerBgColor: string,
  borderColor: string,
  shadowColor: string,
  padding: string
};

Button.defaultProps = {
  textColor: '#000',
  bgColor: '#fff',
  darkerBgColor: 'steelblue',
  borderColor: 'royalblue',
  shadowColor: 'rgba(0, 0, 255, 0.15)',
  padding: '1em 1.75em'
};

export default Button;
