/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import { bool, string, object, func, number, node } from 'prop-types';
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
  onChangeHandler,
  onBlur,
  max,
  min,
  defaultValue,
  upIcon,
  downIcon,
  actionsColor,
  actionsBgColor,
  borderColor,
  borderErrorColor,
  borderRadius
}) => {
  const { register, errors, getValues, setValue } = useFormContext();
  const errorMessage = errors[name] ? errors[name].message : '';
  const required = 'required' in rules;

  const onIncrement = () => {
    const currentValue = getValues(name);
    if (currentValue < max) setValue(name, parseInt(currentValue, 10) + 1);
  };

  const onDecrement = () => {
    const currentValue = getValues(name);
    if (currentValue > min) setValue(name, parseInt(currentValue, 10) - 1);
  };

  const commonProps = {
    error: errorMessage,
    borderColor,
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
      <Label
        name={name}
        label={label}
        required={required}
        withoutMarker={labelWOMarker}
      />
      <Container {...commonProps}>
        <StyledInput
          className={inputClassName}
          type="number"
          id={name}
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          ref={register(rules)}
          onChange={onChangeHandler}
          onBlur={onBlur}
          defaultValue={defaultValue}
          borderRadius={borderRadius}
        />
        <Buttons>
          <Increment onClick={onIncrement} {...actionCommonProps}>
            {upIcon || <Caret up fill={actionsColor} />}
          </Increment>
          <Decrement onClick={onDecrement} {...actionCommonProps}>
            {downIcon || <Caret down fill={actionsColor} />}
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
  onChangeHandler: func,
  onBlur: func,
  defaultValue: number,
  max: number,
  min: number,
  upIcon: node,
  downIcon: node,
  actionsColor: string,
  actionsBgColor: string,
  borderColor: string,
  borderErrorColor: string,
  borderRadius: string
};

InputNumber.defaultProps = {
  className: '',
  inputClassName: '',
  label: '',
  labelWOMarker: false,
  placeholder: '',
  disabled: false,
  rules: {},
  onChangeHandler: () => {},
  onBlur: () => {},
  defaultValue: 0,
  max: 99,
  min: 0,
  upIcon: null,
  downIcon: null,
  actionsColor: '#000000',
  actionsBgColor: '#ffffff',
  borderColor: '#000000',
  borderErrorColor: 'red',
  borderRadius: '0'
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
    ${({ error, borderColor, borderErrorColor }) =>
      error ? borderErrorColor : borderColor};
  border-radius: ${({ borderRadius }) => borderRadius};
  width: inherit;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: ${({ borderRadius }) => borderRadius} 0 0
    ${({ borderRadius }) => borderRadius};
  width: calc(100% - 1rem);
  -moz-appearance: textfield;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  :focus {
    outline: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  width: 1rem;
`;

const Action = styled.div`
  cursor: pointer;
  background-color: ${({ actionsBgColor }) => actionsBgColor};
  padding: 0.2rem;
  display: flex;
  align-items: center;

  svg {
    width: 100%;
  }
`;

const Increment = styled(Action)`
  border-top: 1px solid transparent;
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-left: 1px solid
    ${({ error, borderColor, borderErrorColor }) =>
      error ? borderErrorColor : borderColor};
  border-radius: 0 ${({ borderRadius }) => borderRadius} 0 0;
`;

const Decrement = styled(Action)`
  border-top: 1px solid
    ${({ error, borderColor, borderErrorColor }) =>
      error ? borderErrorColor : borderColor};
  border-right: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-left: 1px solid
    ${({ error, borderColor, borderErrorColor }) =>
      error ? borderErrorColor : borderColor};
  border-radius: 0 0 ${({ borderRadius }) => borderRadius} 0;
`;
