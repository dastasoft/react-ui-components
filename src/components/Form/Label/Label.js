import React from 'react';
import styled from 'styled-components';

const Label = ({ className, name, label, required }) => {
  return (
    <Wrapper className={className} htmlFor={name}>
      {label}
      {label && required && '*'}
    </Wrapper>
  );
};

export default Label;

const Wrapper = styled.label`
  min-height: 1.4rem;
  margin-bottom: 0.2rem;
  padding: 0.1rem 0;
  font-weight: 600;
`;
