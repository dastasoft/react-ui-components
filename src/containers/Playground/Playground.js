/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import { useForm, FormProvider } from 'react-hook-form';

import CircleProgressBar from '../../components/CircleProgressBar';
import { Input, InputNumber, Checkbox, Select } from '../../components/Form';
import Button from '../../components/Button';

const Playground = () => {
  const methods = useForm();
  const onSubmit = values => console.log(values);

  return (
    <Wrapper>
      <ComponentTitle>Input</ComponentTitle>
      <Holder>
        <FormProvider {...methods}>
          <Form onSubmit={methods.handleSubmit(onSubmit)}>
            <Input
              label="Name"
              name="name"
              rules={{
                required: 'Required'
              }}
            />
            <Input
              label=""
              name="surname"
              rules={{
                required: 'Required'
              }}
            />
            <Input
              label="Email"
              name="email"
              rules={{
                required: 'Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address'
                }
              }}
            />

            <InputNumber
              label=""
              name="day"
              rules={{
                required: 'Required'
              }}
            />

            <Checkbox
              label="Agree"
              name="agree"
              rules={{
                required: 'Required'
              }}
            />

            <Checkbox
              label="Test sadsd wqewqe asdosado we"
              name="agree3"
              rules={{
                required: 'Required'
              }}
              isCustom
            />

            <Select
              label="Country"
              name="country"
              placeholder="Select a country..."
              options={[
                { value: 'SP', label: 'Spain' },
                { value: 'JP', label: 'Japan' }
              ]}
              rules={{
                required: 'Must select a value'
              }}
            />
            <div style={{ width: '50%' }}>
              <Button text="Submit" />
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
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem 2rem;
`;
