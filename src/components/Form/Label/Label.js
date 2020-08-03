import React from 'react';
import styled from 'styled-components';
import { bool, string } from 'prop-types';

const Label = ({
  className,
  name,
  label,
  required,
  withoutMarker,
  disabled
}) => {
  return (
    <Wrapper className={className} disabled={disabled} htmlFor={name}>
      {label}
      {!withoutMarker && label && required && ' *'}
    </Wrapper>
  );
};

Label.propTypes = {
  className: string,
  name: string,
  label: string,
  required: bool,
  withoutMarker: bool,
  disabled: bool
};

Label.defaultProps = {
  className: '',
  name: '',
  label: '',
  required: false,
  withoutMarker: false,
  disabled: false
};

export default Label;

const Wrapper = styled.label`
  min-height: 1.4rem;
  margin-bottom: 0.2rem;
  padding: 0.1rem 0;
  font-weight: 600;
  color: ${({ disabled }) =>
    disabled ? 'var(--label-disabled)' : 'var(--label-primary-color)'};
`;
