/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';
import { string, bool, object, func } from 'prop-types';

import Label from '../Label';
import ValidationMessage from '../ValidationMessage';

const Checkbox = ({
  className,
  checkboxClassName,
  name,
  label,
  labelWOMarker,
  disabled,
  rules,
  onChangeHandler,
  borderColor,
  borderRadius,
  bgColor,
  checkColor,
  isCustom,
  size
}) => {
  const [checked, setChecked] = useState(false);
  const { register, errors, setValue, getValues } = useFormContext();
  const errorMessage = errors[name] ? errors[name].message : '';
  const required = 'required' in rules;

  const onClickHandler = () => {
    if (disabled) return;
    setChecked(!getValues(name));
    setValue(name, !getValues(name));
  };

  const theLabel = (
    <Label
      label={label}
      name={name}
      required={required}
      withoutMarker={labelWOMarker}
    />
  );

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
    <Wrapper className={className}>
      {isCustom ? (
        <>
          <Container disabled={disabled} onClick={onClickHandler}>
            <StyledCheckbox
              ref={register(rules)}
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
              error={errorMessage}
              fill={checkColor}
              size={size}
            />
            {theLabel}
          </Container>
        </>
      ) : (
        <>
          {theLabel}
          <Container disabled={disabled} onClick={onClickHandler}>
            <StyledCheckbox
              ref={register(rules)}
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
              error={errorMessage}
              fill={checkColor}
              size={size}
            />
          </Container>
          <ValidationMessage message={errorMessage} />
        </>
      )}
    </Wrapper>
  );
};

Checkbox.propTypes = {
  className: string,
  checkboxClassName: string,
  name: string.isRequired,
  label: string,
  labelWOMarker: bool,
  disabled: bool,
  rules: object,
  onChangeHandler: func,
  borderColor: string,
  borderRadius: string,
  bgColor: string,
  checkColor: string,
  isCustom: bool,
  size: string
};

Checkbox.defaultProps = {
  className: '',
  checkboxClassName: '',
  label: '',
  labelWOMarker: false,
  disabled: false,
  rules: {},
  onChangeHandler: () => {},
  borderColor: '#000000',
  borderRadius: '0px',
  bgColor: '#000000',
  checkColor: '#ffffff',
  isCustom: false,
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
