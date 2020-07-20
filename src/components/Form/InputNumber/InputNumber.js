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
  inputType,
  placeholder,
  disabled,
  rules,
  onChangeHandler,
  onBlur,
  max,
  min,
  defaultValue,
  upIcon,
  downIcon
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
      <Container>
        <StyledInput
          className={inputClassName}
          type={inputType}
          id={name}
          name={name}
          pattern="[0-9]*"
          placeholder={placeholder}
          disabled={disabled}
          ref={register(rules)}
          onChange={onChangeHandler}
          onBlur={onBlur}
          error={errorMessage}
          defaultValue={defaultValue || 0}
        />
        <Buttons>
          <Increment role="button" onClick={onIncrement}>
            {upIcon || <Caret up />}
          </Increment>
          <Decrement role="button" onClick={onDecrement}>
            {downIcon || <Caret down />}
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
  inputType: string,
  placeholder: string,
  disabled: bool,
  rules: object,
  onChangeHandler: func,
  onBlur: func,
  max: number,
  min: number,
  upIcon: node,
  downIcon: node
};

InputNumber.defaultProps = {
  className: '',
  inputClassName: '',
  label: '',
  labelWOMarker: false,
  inputType: 'text',
  placeholder: '',
  disabled: false,
  rules: {},
  onChangeHandler: () => {},
  onBlur: () => {},
  max: 99,
  min: 0,
  upIcon: null,
  downIcon: null
};

export default InputNumber;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  border: 1px solid ${({ error }) => (error ? 'red' : 'black')};
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

const Action = styled.div`
  display: flex;
  cursor: pointer;
  width: 1rem;
  svg {
    width: 50%;
    margin: 0 auto;
  }
`;

const Increment = styled(Action)`
  border-left: 1px solid black;
  border-bottom: 0.5px solid black;
`;

const Decrement = styled(Action)`
  border-top: 0.5px solid black;
  border-left: 1px solid black;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  border: none;
  flex-grow: 1;

  :focus {
    outline: none;
  }
`;
