/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import { bool, string, object, func } from 'prop-types';
import { useFormContext } from 'react-hook-form';

import Label from '../Label';
import ValidationMessage from '../ValidationMessage';

const Input = ({
  className,
  inputClassName,
  name,
  label,
  labelWOMarker,
  inputType,
  placeholder,
  disabled,
  rules,
  onChange,
  onBlur,
  isDate,
  isExpire
}) => {
  const { register, errors, setValue } = useFormContext();
  const errorMessage = errors[name] ? errors[name].message : '';
  const required = 'required' in rules;
  const dateMaxLength = isExpire ? 5 : 11;

  const onKeyDown = event => {
    const inputValue = event.target.value;
    const key = event.keyCode || event.charCode;
    if (key && (key === 8 || key === 46)) {
      if (inputValue.slice(-1) === '/') {
        setValue(name, inputValue.slice(0, -2));
      } else {
        setValue(name, inputValue.slice(0, -1));
      }
    }
  };

  const onDateChangeHandler = event => {
    const { value } = event.target;
    if (
      !value ||
      isNaN(value.replace(/\//g, '')) ||
      value.length === dateMaxLength
    ) {
      setValue(name, value.slice(0, -1));
      return;
    }
    const inputValue =
      value.length === 2 || value.length === 5 ? `${value}/` : value;
    setValue(name, inputValue);
  };

  return (
    <Wrapper className={className}>
      {label && (
        <Label
          disabled={disabled}
          label={label}
          name={name}
          required={required}
          withoutMarker={labelWOMarker}
        />
      )}
      <StyledInput
        ref={register(rules)}
        className={inputClassName}
        disabled={disabled}
        error={errorMessage}
        id={name}
        name={name}
        placeholder={placeholder}
        type={inputType}
        onBlur={onBlur}
        onChange={isDate || isExpire ? onDateChangeHandler : onChange}
        onKeyDown={isDate || isExpire ? onKeyDown : () => {}}
      />
      <ValidationMessage message={errorMessage} />
    </Wrapper>
  );
};

Input.propTypes = {
  className: string,
  inputClassName: string,
  name: string.isRequired,
  label: string,
  labelWOMarker: bool,
  inputType: string,
  placeholder: string,
  disabled: bool,
  rules: object,
  onChange: func,
  onBlur: func,
  isDate: bool,
  isExpire: bool
};

Input.defaultProps = {
  className: '',
  inputClassName: '',
  label: '',
  labelWOMarker: false,
  inputType: 'text',
  placeholder: '',
  disabled: false,
  rules: {},
  onChange: () => {},
  onBlur: () => {},
  isDate: false,
  isExpire: false
};

export default Input;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledInput = styled.input`
  background-color: ${({ disabled }) =>
    disabled ? 'var(--input-bg-disabled)' : 'var(--input-bg-color)'};
  color: ${({ disabled }) =>
    disabled ? 'var(--input-disabled)' : 'var(--input-primary-color)'};
  padding: 0.5rem;
  border: 1px solid
    ${({ error, disabled }) => {
      if (disabled) return 'var(--input-border-disabled)';
      if (error) return 'var(--input-error)';
      return 'var(--input-primary-color)';
    }};
  width: inherit;

  :focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ disabled }) =>
      disabled ? 'var(--input-disabled)' : 'var(--input-placeholder)'};
  }
`;
