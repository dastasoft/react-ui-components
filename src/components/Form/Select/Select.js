/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
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
  const errorMessage = errors[name] ? errors[name].message : '';
  const required = 'required' in rules;

  const styles = {
    ...customStyles,
    menu: (provided, state) => {
      let borderColor = 'var(--select-primary-color)';
      if (errorMessage) borderColor = 'var(--select-error)';
      if (state.isDisabled) borderColor = 'var(--select-disabled)';

      let defaults = {
        borderColor,
        outline: 'none'
      };

      if (customStyles.menu) defaults = { ...defaults, ...customStyles.menu() };

      return {
        ...provided,
        ...defaults
      };
    },
    control: (provided, state) => {
      let borderColor = 'var(--select-primary-color)';
      if (errorMessage) borderColor = 'var(--select-error)';
      if (state.isDisabled) borderColor = 'var(--select-disabled)';

      let defaults = {
        borderColor,
        outline: 'none'
      };

      if (customStyles.control)
        defaults = { ...defaults, ...customStyles.control() };

      return {
        ...provided,
        ...defaults
      };
    },
    placeholder: (provided, state) => {
      let color = 'var(--select-primary-color)';
      if (errorMessage) color = 'var(--select-error)';
      if (state.isDisabled) color = 'var(--select-disabled)';

      let defaults = {
        color
      };

      if (customStyles.placeholder)
        defaults = { ...defaults, ...customStyles.placeholder() };

      return {
        ...provided,
        ...defaults
      };
    }
  };

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        {customDropdownIcon || (
          <StyledCaret>
            <Caret
              down={!props.selectProps.menuIsOpen}
              fill={
                props.selectProps.menuIsOpen
                  ? customDropdownColor
                  : 'var(--select-primary-color)'
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
          disabled={disabled}
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
            styles={styles}
            theme={customTheme}
            value={props.value}
            onChange={value => {
              onChange(value);
              props.onChange(value);
            }}
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
