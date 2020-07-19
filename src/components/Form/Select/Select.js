/* eslint-disable react/forbid-prop-types */
import React from 'react';
import styled from 'styled-components';
import { useFormContext, Controller } from 'react-hook-form';
import ReactSelect from 'react-select';
import { bool, string, array, object, func } from 'prop-types';

import Label from '../Label';
import ValidationMessage from '../ValidationMessage';

const Select = ({
  className,
  selectClassName,
  name,
  label,
  placeholder,
  disabled,
  rules,
  onChangeHandler,
  options,
  defaultValue,
  customStyles,
  customTheme
}) => {
  const { errors, control } = useFormContext();
  const errorMessage = errors[name] ? errors[name].message : '';
  const required = 'required' in rules;

  const styles = {
    menu: provided => ({
      ...provided,
      borderColor: `${errorMessage ? 'red' : 'black'}`,
      outline: 'none'
    }),
    control: provided => ({
      ...provided,
      borderColor: `${errorMessage ? 'red' : 'black'}`,
      outline: 'none'
    }),
    placeholder: provided => ({
      ...provided,
      color: `${errorMessage ? 'red' : 'black'}`
    })
  };

  return (
    <Wrapper className={className}>
      <Label name={name} label={label} required={required} />
      <Controller
        control={control}
        as={ReactSelect}
        rules={rules}
        className={selectClassName}
        id={name}
        name={name}
        placeholder={placeholder}
        isDisabled={disabled}
        onChange={onChangeHandler}
        error={errorMessage}
        options={options}
        styles={{ ...styles, ...customStyles }}
        defaulValue={defaultValue || { value: '', label: '' }}
        theme={theme => ({ ...theme, ...customTheme })}
      />
      <ValidationMessage message={errorMessage} />
    </Wrapper>
  );
};

Select.propTypes = {
  className: string,
  selectClassName: string,
  name: string.isRequired,
  label: string,
  placeholder: string,
  disabled: bool,
  rules: object,
  onChangeHandler: func,
  options: array,
  defaultValue: object,
  customStyles: object,
  customTheme: object
};

Select.defaultProps = {
  className: '',
  selectClassName: '',
  label: '',
  placeholder: '',
  disabled: false,
  rules: {},
  onChangeHandler: () => {},
  options: [],
  defaultValue: {},
  customStyles: {},
  customTheme: {}
};

export default Select;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
