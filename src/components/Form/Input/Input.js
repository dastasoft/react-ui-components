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
  onChangeHandler,
  onBlur
}) => {
  const { register, errors } = useFormContext();
  const errorMessage = errors[name] ? errors[name].message : '';
  const required = 'required' in rules;

  return (
    <Wrapper className={className}>
      <Label
        label={label}
        name={name}
        required={required}
        withoutMarker={labelWOMarker}
      />
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
        onChange={onChangeHandler}
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
  onChangeHandler: func,
  onBlur: func
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
  onChangeHandler: () => {},
  onBlur: () => {}
};

export default Input;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  border: 1px solid ${({ error }) => (error ? 'red' : 'black')};
  width: inherit;

  :focus {
    outline: none;
  }
`;
