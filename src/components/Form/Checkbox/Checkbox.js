/* eslint-disable react/forbid-prop-types */
import React from 'react';
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
  disabled,
  rules,
  onChangeHandler
}) => {
  const { register, errors, setValue, getValues } = useFormContext();
  const errorMessage = errors[name] ? errors[name].message : '';
  const required = 'required' in rules;
  const onClickHandler = () => {
    if (disabled) return;
    setValue(name, !getValues(name));
  };

  return (
    <Wrapper className={className}>
      <Label name={name} label={label} required={required} />
      <Container onClick={onClickHandler} disabled={disabled}>
        <StyledCheckbox
          className={checkboxClassName}
          type="checkbox"
          name={name}
          disabled={disabled}
          ref={register(rules)}
          onChange={onChangeHandler}
        />
        <Checkmark error={errorMessage} />
      </Container>
      <ValidationMessage message={errorMessage} />
    </Wrapper>
  );
};

Checkbox.propTypes = {
  className: string,
  checkboxClassName: string,
  name: string.isRequired,
  label: string,
  disabled: bool,
  rules: object,
  onChangeHandler: func
};

Checkbox.defaultProps = {
  className: '',
  checkboxClassName: '',
  label: '',
  disabled: false,
  rules: {},
  onChangeHandler: () => {}
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
  opacity: 0;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  height: 1.56rem;
  width: 1.56rem;

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

const Checkmark = styled.span`
  position: absolute;
  top: 5px;
  left: 0;
  height: 2.1rem;
  width: 2.1rem;
  background-color: #fff;
  border: 1px solid ${({ error }) => (error ? 'red' : 'black')};

  :after {
    content: '';
    position: absolute;
    display: none;
    left: 12px;
    top: 2px;
    width: 0.5rem;
    height: 1.5rem;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
