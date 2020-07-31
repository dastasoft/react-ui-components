import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { bool, func, string } from 'prop-types';

const SimpleButton = forwardRef(
  (
    {
      className,
      disabled,
      label,
      onClick,
      width,
      height,
      outlined,
      borderRadius,
      labelSize,
      type
    },
    ref
  ) => {
    const onClickHandler = () => {
      if (disabled) return;
      onClick();
    };

    return (
      <Wrapper
        ref={ref}
        borderRadius={borderRadius}
        className={className}
        disabled={disabled}
        height={height}
        outlined={outlined}
        type={type}
        width={width}
        onClick={onClickHandler}
      >
        <Label disabled={disabled} labelSize={labelSize} outlined={outlined}>
          {label}
        </Label>
      </Wrapper>
    );
  }
);

SimpleButton.propTypes = {
  className: string,
  disabled: bool,
  label: string,
  onClick: func,
  width: string,
  height: string,
  outlined: bool,
  borderRadius: string,
  labelSize: string,
  type: string
};

SimpleButton.defaultProps = {
  className: '',
  disabled: false,
  label: '',
  onClick: () => {},
  width: '271px',
  height: '44px',
  outlined: false,
  borderRadius: '0rem',
  labelSize: '17px',
  type: 'submit'
};

export default SimpleButton;

const Wrapper = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ disabled, outlined }) => {
    if (disabled) return 'var(--button-disabled)';
    if (outlined) return 'transparent';
    return 'var(--button-primary-color)';
  }};
  border-radius: ${({ borderRadius }) => borderRadius};
  border: ${({ outlined }) =>
    outlined ? '1px solid var(--button-secondary-color)' : '0px'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  outline: none;
`;

const Label = styled.span`
  color: ${({ disabled, outlined }) => {
    if (disabled) return 'var(--button-label-disabled)';
    if (outlined) return 'var(--button-secondary-color)';
    return 'var(--button-label)';
  }};
  font-weight: 400;
  font-size: ${({ labelSize }) => labelSize};
`;
