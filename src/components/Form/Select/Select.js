/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useFormContext, Controller } from 'react-hook-form';
import ReactSelect, { components } from 'react-select';
import { bool, string, array, object, node, func } from 'prop-types';

import Label from '../Label';
import ValidationMessage from '../ValidationMessage';
import Caret from '../../Caret';

const Select = ({
  className,
  selectClassName,
  name,
  label,
  labelWOMarker,
  placeholder,
  defaultValue,
  disabled,
  rules,
  options,
  customStyles,
  customDropdownIcon,
  customDropdownColor,
  customTheme,
  onChange,
  noOptionsMessage
}) => {
  const { errors, control } = useFormContext();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const errorMessage = errors[name] ? errors[name].message : '';
  const required = 'required' in rules;

  const styles = {
    menu: provided => ({
      ...provided,
      borderColor: `${
        errorMessage ? 'var(--select-error)' : 'var(--select-primary-color)'
      }`,
      outline: 'none'
    }),
    control: provided => ({
      ...provided,
      borderColor: `${
        errorMessage ? 'var(--select-error)' : 'var(--select-primary-color)'
      }`,
      outline: 'none'
    }),
    placeholder: provided => ({
      ...provided,
      color: `${
        errorMessage ? 'var(--select-error)' : 'var(--select-primary-color)'
      }`
    })
  };

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        {customDropdownIcon || (
          <StyledCaret>
            <Caret
              down={!menuIsOpen}
              fill={
                menuIsOpen ? customDropdownColor : 'var(--select-primary-color)'
              }
            />
          </StyledCaret>
        )}
      </components.DropdownIndicator>
    );
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
      <Controller
        control={control}
        id={name}
        name={name}
        render={props => (
          <ReactSelect
            className={selectClassName}
            components={{ DropdownIndicator, IndicatorSeparator: null }}
            defaultValue={defaultValue}
            isDisabled={disabled}
            noOptionsMessage={() => noOptionsMessage}
            options={options}
            placeholder={placeholder}
            styles={{ ...styles, ...customStyles }}
            theme={customTheme}
            value={props.value}
            onChange={value => {
              onChange(value);
              props.onChange(value);
            }}
            onMenuClose={() => setMenuIsOpen(false)}
            onMenuOpen={() => setMenuIsOpen(true)}
          />
        )}
        rules={rules}
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
  labelWOMarker: bool,
  placeholder: string,
  disabled: bool,
  rules: object,
  options: array,
  defaultValue: object,
  customStyles: object,
  customTheme: object,
  customDropdownIcon: node,
  customDropdownColor: string,
  onChange: func,
  noOptionsMessage: string
};

Select.defaultProps = {
  className: '',
  selectClassName: '',
  label: '',
  labelWOMarker: false,
  placeholder: '',
  disabled: false,
  rules: {},
  options: [],
  defaultValue: null,
  customStyles: {},
  customTheme: {},
  customDropdownIcon: null,
  customDropdownColor: 'var(--select-primary-color)',
  onChange: () => {},
  noOptionsMessage: ''
};

export default Select;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledCaret = styled.div`
  width: 1rem;
  display: flex;

  svg {
    width: 100%;
  }
`;
