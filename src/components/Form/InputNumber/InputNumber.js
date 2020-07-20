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
  borderErrorColor
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

  return (
    <Wrapper className={className}>
      <Label
        name={name}
        label={label}
        required={required}
        withoutMarker={labelWOMarker}
      />
      <Container
        error={errorMessage}
        borderColor={borderColor}
        borderErrorColor={borderErrorColor}
      >
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
        />
        <Buttons>
          <Increment
            role="button"
            onClick={onIncrement}
            actionsBgColor={actionsBgColor}
            error={errorMessage}
            borderColor={borderColor}
            borderErrorColor={borderErrorColor}
          >
            {upIcon || <Caret up fill={actionsColor} />}
          </Increment>
          <Decrement
            role="button"
            onClick={onDecrement}
            actionsBgColor={actionsBgColor}
            error={errorMessage}
            borderColor={borderColor}
            borderErrorColor={borderErrorColor}
          >
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
  borderErrorColor: string
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
  borderErrorColor: 'red'
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
  width: inherit;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  width: 1rem;
`;

const Action = styled.div`
  display: flex;
  cursor: pointer;
  background-color: ${({ actionsBgColor }) => actionsBgColor};

  svg {
    width: 50%;
    margin: 0 auto;
  }
`;

const Increment = styled(Action)`
  border-left: 1px solid
    ${({ error, borderColor, borderErrorColor }) =>
      error ? borderErrorColor : borderColor};
  border-bottom: 0.5px solid
    ${({ error, borderColor, borderErrorColor }) =>
      error ? borderErrorColor : borderColor};
`;

const Decrement = styled(Action)`
  border-top: 0.5px solid
    ${({ error, borderColor, borderErrorColor }) =>
      error ? borderErrorColor : borderColor};
  border-left: 1px solid
    ${({ error, borderColor, borderErrorColor }) =>
      error ? borderErrorColor : borderColor};
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  border: none;
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
