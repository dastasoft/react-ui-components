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
  inputType,
  placeholder,
  disabled,
  rules,
  onChangeHandler
}) => {
  const { register, errors } = useFormContext();
  const errorMessage = errors[name] ? errors[name].message : '';
  const required = 'required' in rules;

  return (
    <Wrapper className={className}>
      <Label name={name} label={label} required={required} />
      <StyledInput
        className={inputClassName}
        type={inputType}
        id={name}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        ref={register(rules)}
        onChange={onChangeHandler}
        error={errorMessage}
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
  inputType: string,
  placeholder: string,
  disabled: bool,
  rules: object,
  onChangeHandler: func
};

Input.defaultProps = {
  className: '',
  inputClassName: '',
  label: '',
  inputType: 'text',
  placeholder: '',
  disabled: false,
  rules: {},
  onChangeHandler: () => {}
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

  :focus {
    outline: none;
  }
`;
