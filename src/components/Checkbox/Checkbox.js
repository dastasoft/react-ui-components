/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import styled from 'styled-components';
import { string, bool, object, func, node } from 'prop-types';

const Checkbox = ({
  children,
  className,
  checkboxClassName,
  name,
  disabled,
  onChangeHandler,
  borderColor,
  borderRadius,
  bgColor,
  checkColor,
  size
}) => {
  const [checked, setChecked] = useState(false);

  const onClickHandler = () => {
    if (disabled) return;
    setChecked(!checked);
  };

  const CheckboxIcon = props => (
    <SVG
      {...props}
      aria-hidden="true"
      focusable="false"
      role="img"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      {props.checked ? (
        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
      ) : (
        ''
      )}
    </SVG>
  );

  return (
    <Container
      className={className}
      disabled={disabled}
      onClick={onClickHandler}
    >
      <StyledCheckbox
        checked={checked}
        className={checkboxClassName}
        disabled={disabled}
        name={name}
        type="checkbox"
        onChange={onChangeHandler}
      />
      <CheckboxIcon
        bgColor={bgColor}
        borderColor={borderColor}
        borderRadius={borderRadius}
        checked={checked}
        fill={checkColor}
        size={size}
      />
      {children}
    </Container>
  );
};

Checkbox.propTypes = {
  children: node,
  className: string,
  checkboxClassName: string,
  name: string.isRequired,
  onChangeHandler: func,
  borderColor: string,
  borderRadius: string,
  bgColor: string,
  checkColor: string,
  size: string
};

Checkbox.defaultProps = {
  children: null,
  className: '',
  checkboxClassName: '',
  onChangeHandler: () => {},
  borderColor: '#000000',
  borderRadius: '0px',
  bgColor: '#000000',
  checkColor: '#ffffff',
  size: '2rem'
};

export default Checkbox;

const Container = styled.div`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-size: 22px;
  user-select: none;

  :hover input ~ span {
    background-color: #ccc;
  }
`;

const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  top: 10px;
  left: 0;

  :checked ~ span {
    background-color: #2196f3;
  }

  :checked ~ span:after {
    display: block;
  }

  :disabled ~ span {
    background-color: #ccc;
  }
`;

const SVG = styled.svg`
  position: absolute;
  top: 5px;
  left: 0;
  height: ${({ size }) => size};
  width: ${({ size }) => size};
  background-color: ${({ bgColor, checked }) =>
    checked ? bgColor : 'transparent'};
  border: 1px solid ${({ error, borderColor }) => (error ? 'red' : borderColor)};
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: 2px;
`;
