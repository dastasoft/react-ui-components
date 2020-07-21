/* eslint-disable react/forbid-prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useFormContext, Controller } from 'react-hook-form';
import ReactSelect, { components } from 'react-select';
import { bool, string, array, object, func } from 'prop-types';

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
  defaulValue,
  disabled,
  rules,
  options,
  defaultValue,
  customStyles,
  customDropdownIcon,
  customTheme
}) => {
  const { errors, control } = useFormContext();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
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

  const DropdownIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        {customDropdownIcon || (
          <StyledCaret>
            <Caret down={!menuIsOpen} />
          </StyledCaret>
        )}
      </components.DropdownIndicator>
    );
  };

  return (
    <Wrapper className={className}>
      <Label
        name={name}
        label={label}
        required={required}
        withoutMarker={labelWOMarker}
      />
      <div onClick={() => setMenuIsOpen(!menuIsOpen)}>
        <Controller
          control={control}
          render={props => (
            <ReactSelect
              menuIsOpen={menuIsOpen}
              options={options}
              placeholder={placeholder}
              className={selectClassName}
              isDisabled={disabled}
              onChange={props.onChange}
              components={{ DropdownIndicator, IndicatorSeparator: null }}
            />
          )}
          id={name}
          name={name}
          rules={rules}
          styles={{ ...styles, ...customStyles }}
          defaulValue={defaulValue || { value: '', label: '' }}
          theme={theme => ({ ...theme, ...customTheme })}
        />
      </div>
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
  labelWOMarker: false,
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

const StyledCaret = styled.div`
  width: 1rem;
  display: flex;

  svg {
    width: 100%;
  }
`;
