/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { bool, func, node, number, object, string } from 'prop-types';
import { useFormContext } from 'react-hook-form';

import Label from '../Label';
import ValidationMessage from '../ValidationMessage';
import Caret from '../../Caret';

const InputNumber = ({
  className,
  inputClassName,
  name,
  label,
  labelWOMarker,
  placeholder,
  disabled,
  rules,
  height,
  onChange,
  onFocus,
  onBlur,
  max,
  min,
  defaultValue,
  upIcon,
  downIcon,
  focusColor,
  blurColor,
  actionsBgColor,
  borderErrorColor,
  borderRadius,
  additionalErrorMsg,
  extraRef
}) => {
  const [theFocusColor, setTheFocusColor] = useState(blurColor);
  const { register, errors, getValues, setValue } = useFormContext();
  const errorMessage =
    (errors[name] ? errors[name].message : '') ||
    (errors[name] && errors[name].type ? additionalErrorMsg : '');
  const required = 'required' in rules;

  const fieldActions = { shouldValidate: true, shouldDirty: true };

  const onIncrement = () => {
    const currentValue = getValues(name);
    if (currentValue < max)
      setValue(name, parseInt(currentValue, 10) + 1, fieldActions);
  };

  const onDecrement = () => {
    const currentValue = getValues(name);
    if (currentValue > min)
      setValue(name, parseInt(currentValue, 10) - 1, fieldActions);
  };

  const onFocusHandler = event => {
    setTheFocusColor(errorMessage ? borderErrorColor : focusColor);
    onFocus(event);
  };

  const onBlurHandler = event => {
    setTheFocusColor(errorMessage ? borderErrorColor : blurColor);
    onBlur(event);
  };

  const commonProps = {
    error: errorMessage,
    theFocusColor,
    borderErrorColor,
    borderRadius
  };

  const actionCommonProps = {
    ...commonProps,
    role: 'button',
    actionsBgColor
  };

  return (
    <Wrapper className={className}>
      {label && (
        <Label
          label={label}
          name={name}
          required={required}
          withoutMarker={labelWOMarker}
        />
      )}
      <Container {...commonProps} height={height}>
        <StyledInput
          ref={event => {
            register(event, rules);
            if (extraRef) extraRef.current = event;
          }}
          borderErrorColor={borderErrorColor}
          borderRadius={borderRadius}
          className={inputClassName}
          defaultValue={defaultValue}
          disabled={disabled}
          error={errorMessage}
          id={name}
          name={name}
          placeholder={placeholder}
          theFocusColor={theFocusColor}
          type="number"
          onBlur={onBlurHandler}
          onChange={onChange}
          onFocus={onFocusHandler}
        />
        <Buttons>
          <Increment onClick={onIncrement} {...actionCommonProps}>
            {upIcon || <Caret up fill={theFocusColor} />}
          </Increment>
          <Decrement onClick={onDecrement} {...actionCommonProps}>
            {downIcon || <Caret down fill={theFocusColor} />}
          </Decrement>
        </Buttons>
      </Container>
      <ValidationMessage message={errorMessage} />
    </Wrapper>
  );
};

InputNumber.propTypes = {
  className: string,
  inputClassName: string,
  name: string.isRequired,
  label: string,
  labelWOMarker: bool,
  placeholder: string,
  disabled: bool,
  rules: object,
  height: string,
  onChange: func,
  onFocus: func,
  onBlur: func,
  defaultValue: number,
  max: number,
  min: number,
  upIcon: node,
  focusColor: string,
  blurColor: string,
  downIcon: node,
  actionsBgColor: string,
  borderErrorColor: string,
  borderRadius: string,
  additionalErrorMsg: string,
  extraRef: object
};

InputNumber.defaultProps = {
  className: '',
  inputClassName: '',
  label: '',
  labelWOMarker: false,
  placeholder: '',
  disabled: false,
  rules: {},
  height: '100%',
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  defaultValue: 0,
  max: 99,
  min: 0,
  upIcon: null,
  focusColor: '#000000',
  blurColor: '#000000',
  downIcon: null,
  actionsBgColor: 'gray',
  borderErrorColor: 'red',
  borderRadius: '0',
  additionalErrorMsg: '',
  extraRef: null
};

export default InputNumber;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  border: 1px solid
    ${({ error, theFocusColor, borderErrorColor }) =>
      error ? borderErrorColor : theFocusColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  width: inherit;
  height: ${({ height }) => height};
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius} 0 0
    ${({ borderRadius }) => borderRadius};
  width: calc(100% - 1rem);
  -moz-appearance: textfield;
  color: ${({ error, theFocusColor, borderErrorColor }) =>
    error ? borderErrorColor : theFocusColor};

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :focus {
    outline: none;
    color: ${({ error, theFocusColor, borderErrorColor }) =>
      error ? borderErrorColor : theFocusColor};
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 1.3rem;
`;

const Action = styled.div`
  cursor: pointer;
  padding: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: ${({ actionsBgColor }) => actionsBgColor};
  }

  svg {
    width: 100%;
  }
`;

const Increment = styled(Action)`
  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-left: 1px solid
    ${({ error, theFocusColor, borderErrorColor }) =>
      error ? borderErrorColor : theFocusColor};
  border-radius: 0 ${({ borderRadius }) => borderRadius} 0 0;
  flex-grow: 1;

  svg {
    margin-top: 1px;
    margin-bottom: -1px;
  }
`;

const Decrement = styled(Action)`
  border-top: 1px solid
    ${({ error, theFocusColor, borderErrorColor }) =>
      error ? borderErrorColor : theFocusColor};
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-left: 1px solid
    ${({ error, theFocusColor, borderErrorColor }) =>
      error ? borderErrorColor : theFocusColor};
  border-radius: 0 0 ${({ borderRadius }) => borderRadius} 0;
  flex-grow: 1;
`;
