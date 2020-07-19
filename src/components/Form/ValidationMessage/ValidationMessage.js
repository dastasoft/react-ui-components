import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const ValidationMessage = ({ className, message }) => {
  return message ? (
    <Wrapper className={className}>{message}</Wrapper>
  ) : (
    <Wrapper className={className} />
  );
};

ValidationMessage.propTypes = {
  className: string,
  message: string
};

ValidationMessage.defaultProps = {
  className: '',
  message: ''
};

export default ValidationMessage;

const Wrapper = styled.div`
  min-height: 1rem;
  margin: 0.5rem 0 1rem 0;
  color: red;
  text-overflow: ellipsis;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
`;
