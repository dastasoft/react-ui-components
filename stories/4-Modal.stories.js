/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';

import Modal from '../src/components/Modal';
import Button from '../src/components/Button';

export default {
  title: 'Modal',
  component: Modal
};

export const Main = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Button type="button" onClick={() => setShow(true)} text="Open Modal" />
      <Modal show={show} onClick={() => setShow(false)}>
        <div>Option 1</div>
        <div>Option 2</div>
        <div>Option 3</div>
      </Modal>
    </div>
  );
};
