/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';

import Select from '../../components/Form/Select/Select';
import InputNumber from '../../components/Form/InputNumber';

const Playground = () => {
  const methods = useForm({
    mode: 'all',
    defaultValues: {
      test: ''
    }
  });
  const onSubmit = values => console.log(values);

  return (
    <Wrapper>
      <ComponentTitle>Form</ComponentTitle>
      <Holder>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Select name="test2" options={[{ value: 'oso', label: 'oso' }]} />
            <InputNumber name="test" placeholder="0" />
          </form>
        </FormProvider>
      </Holder>
      <div style={{ display: 'flex' }}>
        <pre>{JSON.stringify(methods.formState, null, 2)}</pre>
        <pre>{JSON.stringify(methods.watch(), null, 2)}</pre>
      </div>
    </Wrapper>
  );
};

export default Playground;

const Wrapper = styled.div`
  padding: 2rem;
`;

const SingleHolder = styled.div`
  border: 1px solid black;
  margin: 1rem 2rem 2rem 2rem;
  padding: 1rem;
`;

const Holder = styled(SingleHolder)`
  > * {
    margin: 0 2rem;
  }
`;

const HolderFlexer = styled(Holder)`
  display: flex;
  align-items: center;
  justify-content: space-around;

  > * {
    flex-grow: 1;
  }
`;

const ComponentTitle = styled.h2`
  padding: 1rem 0 0 0;
  text-decoration: underline;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem 2rem;
`;
