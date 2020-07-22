/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';

import CircleProgressBar from '../../components/CircleProgressBar';
import { Input, InputNumber, Checkbox, Select } from '../../components/Form';
import Button from '../../components/Button';

const Playground = () => {
  const methods = useForm({ mode: 'onChange' });
  const onSubmit = values => console.log(values);

  const onChangeValues = () => {
    methods.setValue(
      'country',
      { value: 'FR', label: 'france' },
      { shouldDirty: true, shouldValidate: true }
    );
  };

  return (
    <Wrapper>
      <ComponentTitle>Form</ComponentTitle>
      <Holder>
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmit)}>
            <InputNumber label="" name="day" />

            <InputNumber
              borderColor="blue"
              borderRadius="4px"
              label=""
              name="month"
            />

            <Checkbox
              bgColor="royalBlue"
              borderColor="royalBlue"
              checkColor="papayawhip"
              label="Agree"
              name="agree"
            />

            <Select
              label="Country"
              name="country"
              options={[
                { value: 'SP', label: 'spain' },
                { value: 'JP', label: 'japan' }
              ]}
              placeholder="Select a country..."
              rules={{ required: 'oso' }}
            />
            <div style={{ display: 'flex', width: '50%' }}>
              <Button disabled={!methods.formState.isValid} text="Submit" />
              <Button
                text="Change values"
                type="button"
                onClick={onChangeValues}
              />
            </div>
          </Form>
        </FormProvider>
      </Holder>

      {/* <ComponentTitle>CircleProgressBar</ComponentTitle>
      <Holder>
        <CircleProgressBar
          trailStrokeColor="gray"
          strokeColor="teal"
          percentage={75}
          innerText="complete"
          speed={1}
        />
      </Holder> */}
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
